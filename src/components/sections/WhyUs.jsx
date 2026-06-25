import { motion } from 'framer-motion'
import { WHY_US_FEATURES, STATS } from '../../data/constants'
import DynamicIcon from '../ui/DynamicIcon'
import AnimatedCounter from '../ui/AnimatedCounter'
import { RevealOnScroll, StaggerReveal, fadeInUp } from '../ui/RevealOnScroll'

export default function WhyUs() {
  return (
    <section id="why-us" className="section-padding relative overflow-hidden" aria-labelledby="why-us-heading">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-electric/5 to-transparent pointer-events-none" />

      <div className="container-max relative">
        <RevealOnScroll className="text-center mb-14 lg:mb-16">
          <h2 id="why-us-heading" className="section-title mb-4">
            Why Trucking Companies Choose{' '}
            <span className="text-electric">FinovoHQ</span>
          </h2>
          <p className="section-subtitle mx-auto">
            We combine deep industry knowledge with modern financial tools to deliver
            results that generic accountants simply can&apos;t match.
          </p>
        </RevealOnScroll>

        <StaggerReveal className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 lg:mb-20">
          {WHY_US_FEATURES.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              className="text-center p-6 rounded-2xl border border-gray-100 bg-white shadow-card
                         hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-navy flex items-center justify-center mx-auto mb-5">
                <DynamicIcon name={feature.icon} className="w-7 h-7 text-electric" />
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </StaggerReveal>

        <RevealOnScroll>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 p-8 lg:p-10 rounded-2xl bg-navy relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-electric/10 via-transparent to-electric/5 pointer-events-none" />

            {STATS.map((stat) => (
              <div key={stat.label} className="relative text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-2">
                  <AnimatedCounter
                    value={stat.value}
                    prefix={stat.prefix || ''}
                    suffix={stat.suffix || ''}
                  />
                </div>
                <p className="text-sm sm:text-base text-gray-400 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
