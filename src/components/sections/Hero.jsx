import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { HERO_BENEFITS, FORM_ASSURANCES, TRUCK_OPTIONS, CHALLENGE_OPTIONS } from '../../data/constants'
import CheckItem from '../ui/CheckItem'
import { fadeInUp, staggerContainer } from '../ui/RevealOnScroll'

export default function Hero() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    trucks: '',
    challenge: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 lg:pt-24 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-electric/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-32 w-80 h-80 bg-navy/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-max section-padding !py-12 lg:!py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-electric/10 text-electric text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                Trusted by 100+ trucking companies
              </span>
            </motion.div>

            <motion.h1
              id="hero-heading"
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy leading-[1.1] tracking-tight"
            >
              Your Financial Headquarters for{' '}
              <span className="text-gradient">Trucking Success</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl">
              We help trucking companies gain financial clarity, improve cash flow, reduce tax
              surprises, and make smarter business decisions.
            </motion.p>

            <motion.ul variants={fadeInUp} className="grid sm:grid-cols-2 gap-3">
              {HERO_BENEFITS.map((benefit) => (
                <CheckItem key={benefit}>{benefit}</CheckItem>
              ))}
            </motion.ul>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => scrollTo('#hero-form')} className="btn-primary group">
                Book Free Health Check
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button onClick={() => scrollTo('#services')} className="btn-secondary">
                Learn More
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            id="hero-form"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="glass-card p-6 sm:p-8 relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-electric/5 via-transparent to-navy/5 pointer-events-none" />

              <div className="relative">
                <div className="mb-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-navy">
                    Free Financial Health Check
                  </h2>
                  <p className="text-gray-500 text-sm mt-1">
                    Get a personalized assessment of your fleet&apos;s finances.
                  </p>
                </div>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-navy mb-2">You&apos;re All Set!</h3>
                    <p className="text-gray-600">
                      We&apos;ll reach out within 24 hours to schedule your free consultation.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-navy mb-1.5">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          value={form.firstName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/60 text-navy placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-electric/30 focus:border-electric transition-all"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-navy mb-1.5">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          value={form.lastName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/60 text-navy placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-electric/30 focus:border-electric transition-all"
                          placeholder="Smith"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-navy mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/60 text-navy placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-electric/30 focus:border-electric transition-all"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-navy mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/60 text-navy placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-electric/30 focus:border-electric transition-all"
                        placeholder="john@company.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="trucks" className="block text-sm font-medium text-navy mb-1.5">
                        Number of Trucks
                      </label>
                      <select
                        id="trucks"
                        name="trucks"
                        required
                        value={form.trucks}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/60 text-navy focus:outline-none focus:ring-2 focus:ring-electric/30 focus:border-electric transition-all appearance-none cursor-pointer"
                      >
                        <option value="" disabled>Select fleet size</option>
                        {TRUCK_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="challenge" className="block text-sm font-medium text-navy mb-1.5">
                        Biggest Financial Challenge
                      </label>
                      <select
                        id="challenge"
                        name="challenge"
                        required
                        value={form.challenge}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/60 text-navy focus:outline-none focus:ring-2 focus:ring-electric/30 focus:border-electric transition-all appearance-none cursor-pointer"
                      >
                        <option value="" disabled>Select your challenge</option>
                        {CHALLENGE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    <button type="submit" className="btn-primary w-full !py-4 mt-2">
                      Book My Free Financial Health Check
                    </button>
                  </form>
                )}

                <ul className="grid grid-cols-2 gap-2 mt-6 pt-6 border-t border-gray-100">
                  {FORM_ASSURANCES.map((item) => (
                    <CheckItem key={item} className="!text-xs sm:!text-sm">{item}</CheckItem>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
