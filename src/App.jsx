import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/sections/Navbar'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import WhyUs from './components/sections/WhyUs'
import Pricing from './components/sections/Pricing'
import Process from './components/sections/Process'
import Testimonials from './components/sections/Testimonials'
import CTA from './components/sections/CTA'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'

function PageLoader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-white flex items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center gap-4">
        <motion.div
          className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        >
          <span className="text-electric font-bold text-xl">F</span>
        </motion.div>
        <motion.div
          className="w-32 h-1 bg-gray-100 rounded-full overflow-hidden"
        >
          <motion.div
            className="h-full bg-electric rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <PageLoader key="loader" />}
      </AnimatePresence>

      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Pricing />
          <WhyUs />
          <Process />
          <Testimonials />
          <CTA />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
