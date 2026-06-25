import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '../../data/constants'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const scrollTo = (href) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-max px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="flex items-center gap-2 group"
            aria-label="FinovoHQ home"
          >
            <div className="w-9 h-9 rounded-lg bg-navy flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="text-electric font-bold text-lg">F</span>
            </div>
            <span className="text-xl font-bold text-navy tracking-tight">
              Finovo<span className="text-electric">HQ</span>
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-sm font-medium text-gray-600 hover:text-navy transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-electric after:transition-all hover:after:w-full"
              >
                {link.label}
              </button>
            ))}
            <button onClick={() => scrollTo('#hero-form')} className="btn-primary !py-2.5 !px-5 !text-sm">
              Free Health Check
            </button>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg text-navy hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="container-max px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-left py-3 px-4 rounded-lg text-navy font-medium hover:bg-gray-50 transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo('#hero-form')}
                className="btn-primary mt-2 w-full"
              >
                Free Health Check
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
