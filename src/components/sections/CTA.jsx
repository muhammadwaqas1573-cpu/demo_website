import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { RevealOnScroll } from '../ui/RevealOnScroll'

export default function CTA() {
  const scrollToForm = () => {
    document.querySelector('#hero-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="section-padding" aria-labelledby="cta-heading">
      <div className="container-max">
        <RevealOnScroll>
          <div className="relative rounded-3xl bg-navy overflow-hidden px-6 py-16 sm:px-12 sm:py-20 lg:px-20 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-electric/20 via-transparent to-navy pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-electric/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <motion.h2
                id="cta-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight"
              >
                Ready To Gain Financial Clarity?
              </motion.h2>
              <p className="text-lg sm:text-xl text-gray-300 mb-10">
                Book your free financial health check today.
              </p>
              <button onClick={scrollToForm} className="btn-white group">
                Schedule My Free Consultation
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
