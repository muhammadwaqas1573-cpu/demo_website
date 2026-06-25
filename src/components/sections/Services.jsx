import { motion } from 'framer-motion'
import { SERVICES } from '../../data/constants'
import DynamicIcon from '../ui/DynamicIcon'
import { RevealOnScroll, StaggerReveal, fadeInUp } from '../ui/RevealOnScroll'

export default function Services() {
  return (
    <section id="services" className="section-padding bg-gray-50/50 relative" aria-labelledby="services-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none" />

      <div className="container-max relative">
        <RevealOnScroll className="text-center mb-14 lg:mb-16">
          <h2 id="services-heading" className="section-title mb-4">
            Financial Services Built For{' '}
            <span className="text-electric">Trucking Companies</span>
          </h2>
          <p className="section-subtitle mx-auto">
            End-to-end financial management tailored to the unique needs of fleet operators
            across the United States.
          </p>
        </RevealOnScroll>

        <StaggerReveal className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service) => (
            <motion.article
              key={service.title}
              variants={fadeInUp}
              className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-card border border-gray-100
                         transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-electric/20"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-electric/0 to-electric/0 group-hover:from-electric/5 group-hover:to-transparent transition-all duration-300 pointer-events-none" />

              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center mb-5
                                group-hover:bg-electric group-hover:scale-110 transition-all duration-300">
                  <DynamicIcon
                    name={service.icon}
                    className="w-6 h-6 text-electric group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="text-lg font-bold text-navy mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            </motion.article>
          ))}
        </StaggerReveal>
      </div>
    </section>
  )
}
