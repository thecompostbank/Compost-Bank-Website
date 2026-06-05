import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const LogoMark = ({ className = '' }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="50" cy="50" r="46.5" stroke="currentColor" strokeWidth="2.5" />
    <path
      d="M26,56 C21,43 26,27 40,20 C55,12 73,19 80,36 C86,51 81,69 68,77 C55,85 37,81 29,69 C26,64 26,60 26,56Z"
      stroke="currentColor" strokeWidth="2" fill="none"
    />
    <path
      d="M34,53 C30,43 34,30 45,25 C57,19 71,25 76,38 C80,50 76,64 66,70 C56,76 41,72 36,61 C34,57 34,55 34,53Z"
      stroke="currentColor" strokeWidth="1.5" fill="none"
    />
    <path
      d="M43,51 C40,44 43,35 51,32 C59,28 68,33 71,42 C74,51 70,61 63,65 C56,69 47,65 44,57 C43,54 43,52 43,51Z"
      stroke="currentColor" strokeWidth="1.5" fill="none"
    />
    <path
      d="M52,50 C50,46 51,41 55,39 C59,37 63,40 64,45 C65,50 63,55 59,57 C55,59 51,56 52,52 C52,51 52,50 52,50Z"
      stroke="currentColor" strokeWidth="1" fill="none"
    />
  </svg>
)

const navLinks = [
  { label: 'Services', path: '/services' },
  { label: 'How It Works', path: '/how-it-works' },
  { label: 'Projects', path: '/projects' },
  { label: 'About', path: '/about' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    document.body.style.overflow = ''
  }, [location.pathname])

  const toggleMenu = () => {
    const next = !menuOpen
    setMenuOpen(next)
    document.body.style.overflow = next ? 'hidden' : ''
  }

  const onLight = scrolled || !isHome
  const logoColor = onLight ? 'text-forest' : 'text-sand'
  const linkColor = 'text-forest'
  const bgClass = onLight
    ? 'bg-cream/96 backdrop-blur-md shadow-[0_1px_0_0_rgba(46,58,47,0.08)]'
    : 'bg-transparent'

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${bgClass}`}>
        <div className="w-full px-6 lg:px-10 py-5 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className={`flex items-center gap-3 group transition-opacity hover:opacity-75 ${logoColor}`}>
            <LogoMark className="w-14 h-14 flex-shrink-0" />
            <div className="leading-none">
              <p className="text-[15px] font-lato tracking-ultra uppercase font-bold block mb-[3px]">
                The Compost Bank
              </p>
              <p className={`text-[12px] font-lato tracking-wide2 uppercase block transition-colors ${
                onLight ? 'text-terracotta' : 'text-sand/55'
              }`}>
                Wealth in Waste
              </p>
            </div>
          </Link>

          {/* Desktop nav + CTA */}
          <div className="hidden lg:flex items-center gap-9">
            {navLinks.map(({ label, path }) => (
              <Link
                key={path}
                to={path}
                className={`text-[14px] font-lato tracking-widest uppercase transition-all duration-200 hover:opacity-50 ${linkColor} ${
                  location.pathname === path ? 'opacity-100' : 'opacity-75'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/contact"
              className={`text-[13px] font-lato tracking-ultra uppercase px-7 py-3 border transition-all duration-200 ${
                onLight
                  ? 'border-forest/40 text-forest hover:bg-forest hover:text-sand hover:border-forest'
                  : 'border-sand/35 text-sand hover:bg-sand/10 hover:border-sand/60'
              }`}
            >
              Book a Consultation
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className={`lg:hidden flex flex-col gap-[5px] group ${logoColor}`}
          >
            <span className={`block h-px w-6 bg-current transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? 'w-0 opacity-0' : 'w-4 ml-auto'}`} />
            <span className={`block h-px w-6 bg-current transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      <div className={`fixed inset-0 z-40 bg-forest flex flex-col justify-center px-10 transition-all duration-500 ${
        menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="mb-16">
          <p className="text-sand/30 text-[9px] tracking-ultra uppercase font-lato mb-10">Navigation</p>
          <nav className="flex flex-col gap-6">
            {navLinks.map(({ label, path }) => (
              <Link
                key={path}
                to={path}
                className="font-cormorant text-4xl text-sand hover:text-sand/60 transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="border-t border-sand/10 pt-8">
          <Link
            to="/contact"
            className="inline-block text-[10px] font-lato tracking-ultra uppercase border border-sand/30 text-sand px-8 py-3.5 hover:bg-sand hover:text-forest transition-colors"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </>
  )
}
