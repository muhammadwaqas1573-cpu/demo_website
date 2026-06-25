import { FOOTER_LINKS } from '../../data/constants'

const COLUMNS = [
  { title: 'Company', links: FOOTER_LINKS.company },
  { title: 'Services', links: FOOTER_LINKS.services },
  { title: 'Resources', links: FOOTER_LINKS.resources },
  { title: 'Legal', links: FOOTER_LINKS.legal },
]

export default function Footer() {
  const scrollTo = (href) => {
    if (href.startsWith('#') && href.length > 1) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-navy text-gray-400" role="contentinfo">
      <div className="container-max px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-4 lg:mb-0">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
                <span className="text-electric font-bold text-lg">F</span>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Finovo<span className="text-electric">HQ</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed max-w-xs">
              Your financial headquarters for trucking success. Bookkeeping, tax planning,
              and advisory for US fleet operators.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-white font-semibold text-sm mb-4">{col.title}</h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith('#')) {
                          e.preventDefault()
                          scrollTo(link.href)
                        }
                      }}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10 text-center sm:text-left">
          <p className="text-sm">
            &copy; 2025 FinovoHQ LLC. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
