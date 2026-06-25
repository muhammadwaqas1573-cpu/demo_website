import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { TESTIMONIALS } from '../../data/constants'
import { RevealOnScroll, StaggerReveal, fadeInUp } from '../ui/RevealOnScroll'

export default function Testimonials() {
  return (
    <section className="section-padding relative" aria-labelledby="testimonials-heading">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-electric/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-max relative">
        <RevealOnScroll className="text-center mb-14 lg:mb-16">
          <h2 id="testimonials-heading" className="section-title mb-4">
            Trusted by Fleet Owners Nationwide
          </h2>
          <p className="section-subtitle mx-auto">
            Hear from trucking company owners who transformed their finances with FinovoHQ.
          </p>
        </RevealOnScroll>

        <StaggerReveal className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <motion.article
              key={testimonial.name}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-card border border-gray-100
                         hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <Quote className="w-8 h-8 text-electric/20 mb-4" />

              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-6">
                &ldquo;{testimonial.review}&rdquo;
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center flex-shrink-0`}
                  role="img"
                  aria-label={`${testimonial.name} photo placeholder`}
                >
                  <span className="text-white font-bold text-sm">{testimonial.initials}</span>
                </div>
                <div>
                  <p className="font-bold text-navy text-sm">{testimonial.name}</p>
                  <p className="text-gray-500 text-xs">{testimonial.company}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </StaggerReveal>
      </div>
    </section>
  )
}
