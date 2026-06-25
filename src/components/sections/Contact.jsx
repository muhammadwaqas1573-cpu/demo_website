import { Mail, Phone, MapPin } from 'lucide-react'
import { RevealOnScroll, StaggerReveal, fadeInUp } from '../ui/RevealOnScroll'
import { motion } from 'framer-motion'

const CONTACT_ITEMS = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@finovohq.com',
    href: 'mailto:hello@finovohq.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '(555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Wyoming, USA',
    href: null,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-gray-50/50" aria-labelledby="contact-heading">
      <div className="container-max">
        <RevealOnScroll className="text-center mb-14">
          <h2 id="contact-heading" className="section-title mb-4">Get In Touch</h2>
          <p className="section-subtitle mx-auto">
            Have questions? Our team is here to help you take control of your fleet&apos;s finances.
          </p>
        </RevealOnScroll>

        <StaggerReveal className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {CONTACT_ITEMS.map((item) => (
            <motion.div
              key={item.label}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-6 sm:p-8 text-center shadow-card border border-gray-100
                         hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-electric" />
              </div>
              <p className="text-sm font-medium text-gray-500 mb-1">{item.label}</p>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-navy font-semibold hover:text-electric transition-colors"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-navy font-semibold">{item.value}</p>
              )}
            </motion.div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  )
}
