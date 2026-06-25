import { motion } from 'framer-motion'
import { PROCESS_STEPS } from '../../data/constants'
import { RevealOnScroll, StaggerReveal, fadeInUp } from '../ui/RevealOnScroll'

export default function Process() {
  return (
    <section id="about" className="section-padding bg-gray-50/50" aria-labelledby="process-heading">
      <div className="container-max">
        <RevealOnScroll className="text-center mb-14 lg:mb-16">
          <h2 id="process-heading" className="section-title mb-4">How It Works</h2>
          <p className="section-subtitle mx-auto">
            From your first free consultation to ongoing growth support—a clear, proven process
            designed for busy fleet owners.
          </p>
        </RevealOnScroll>

        <StaggerReveal className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-electric/20 via-electric/40 to-electric/20" />

          {PROCESS_STEPS.map((step) => (
            <motion.div key={step.step} variants={fadeInUp} className="relative text-center">
              <div className="relative z-10 w-24 h-24 rounded-2xl bg-white border-2 border-electric/20 shadow-card
                              flex items-center justify-center mx-auto mb-6
                              hover:border-electric hover:shadow-card-hover transition-all duration-300">
                <span className="text-3xl font-extrabold text-electric">{step.step}</span>
              </div>
              <h3 className="text-lg font-bold text-navy mb-3">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">{step.description}</p>
            </motion.div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  )
}
