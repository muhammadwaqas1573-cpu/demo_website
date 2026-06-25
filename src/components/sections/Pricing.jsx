import { motion } from 'framer-motion'
import { PRICING_PLANS } from '../../data/constants'
import { RevealOnScroll, StaggerReveal, fadeInUp } from '../ui/RevealOnScroll'

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-gray-50/60 relative" aria-labelledby="pricing-heading">
      <div className="container-max relative">
        <RevealOnScroll className="text-center mb-14 lg:mb-16">
          <h2 id="pricing-heading" className="section-title mb-4">
            Simple Pricing for Trucking Finance Support
          </h2>
          <p className="section-subtitle mx-auto max-w-2xl">
            Choose the plan that fits your fleet and get transparent financial support, bookkeeping, and tax planning with no hidden fees.
          </p>
        </RevealOnScroll>

        <StaggerReveal className="grid gap-6 lg:grid-cols-3">
          {PRICING_PLANS.map((plan) => (
            <motion.article
              key={plan.name}
              variants={fadeInUp}
              className="relative rounded-3xl border border-gray-200 bg-white p-8 shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="mb-6">
                <p className="text-sm uppercase tracking-[0.3em] text-electric font-semibold">
                  {plan.tagline}
                </p>
                <h3 className="mt-4 text-3xl font-extrabold text-navy">{plan.name}</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">{plan.description}</p>
              </div>

              <div className="mb-6 flex items-end gap-2">
                <span className="text-4xl font-bold text-navy">{plan.price}</span>
                <span className="text-sm text-gray-500">{plan.frequency}</span>
              </div>

              <ul className="space-y-3 mb-8 text-gray-600 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-electric" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="btn-primary w-full mt-auto">Choose {plan.name}</button>
            </motion.article>
          ))}
        </StaggerReveal>
      </div>
    </section>
  )
}
