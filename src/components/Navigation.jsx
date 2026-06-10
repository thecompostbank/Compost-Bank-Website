import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { services } from '../data/servicesData'

const navLinks = [
  { label: 'How It Works', path: '/how-it-works' },
  { label: 'About', path: '/about' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [onDarkSection, setOnDarkSection] = useState(true)
  const [onCharcoalSection, setOnCharcoalSection] = useState(false)
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

  useEffect(() => {
    const darkSections = document.querySelectorAll('[data-nav-dark]')
    const charcoalSections = document.querySelectorAll('[data-nav-charcoal]')

    const activeDark = new Set()
    const activeCharcoal = new Set()

    const opts = { rootMargin: '0px 0px -75% 0px', threshold: 0 }

    const darkObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => e.isIntersecting ? activeDark.add(e.target) : activeDark.delete(e.target))
        setOnDarkSection(activeDark.size > 0)
      },
      opts
    )

    const charcoalObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => e.isIntersecting ? activeCharcoal.add(e.target) : activeCharcoal.delete(e.target))
        setOnCharcoalSection(activeCharcoal.size > 0)
      },
      opts
    )

    if (!darkSections.length && !charcoalSections.length) {
      setOnDarkSection(false)
      setOnCharcoalSection(false)
    }

    darkSections.forEach(s => darkObserver.observe(s))
    charcoalSections.forEach(s => charcoalObserver.observe(s))

    return () => {
      darkObserver.disconnect()
      charcoalObserver.disconnect()
    }
  }, [location.pathname])

  const toggleMenu = () => {
    const next = !menuOpen
    setMenuOpen(next)
    document.body.style.overflow = next ? 'hidden' : ''
  }

  const navBgVisible = scrolled || !isHome
  const navIsDark = navBgVisible && onDarkSection
  const navIsCharcoal = navBgVisible && onCharcoalSection
  const useLightText = !navBgVisible || navIsDark || navIsCharcoal

  const logoColor = useLightText ? 'text-sand' : 'text-forest'
  const linkColor = (isHome && !navBgVisible) ? 'text-forest' : (useLightText ? 'text-sand' : 'text-forest')
  const bgClass = navIsCharcoal
    ? 'bg-charcoal/95 backdrop-blur-md'
    : navIsDark
      ? 'bg-forest/95 backdrop-blur-md'
      : navBgVisible
        ? 'bg-cream/96 backdrop-blur-md shadow-[0_1px_0_0_rgba(46,58,47,0.08)]'
        : 'bg-transparent'

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${bgClass}`}>
        <div className="w-full px-5 lg:px-10 py-3 lg:py-5 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className={`flex items-center gap-1 group transition-opacity hover:opacity-75 ${logoColor}`}>
            <img src="/Images/logo-for-website.png" alt="The Compost Bank" className="w-12 h-12 sm:w-16 sm:h-16 lg:w-28 lg:h-28 flex-shrink-0 object-contain" />
            <div className="leading-none">
              <p className={`text-[12px] sm:text-[14px] lg:text-[18px] font-lato tracking-ultra uppercase font-bold block mb-[2px] lg:mb-[3px] ${useLightText ? 'text-sand' : 'text-forest'}`}>
                The Compost Bank
              </p>
              <p className={`text-[9px] sm:text-[10px] lg:text-[13px] font-lato tracking-wide2 uppercase block transition-colors ${
                useLightText ? 'text-sand/55' : 'text-terracotta'
              }`}>
                Wealth in Waste
              </p>
            </div>
          </Link>

          {/* Desktop nav + CTA */}
          <div className="hidden lg:flex items-center gap-9">

            {/* Home */}
            <Link
              to="/"
              className={`text-[14px] font-lato tracking-widest uppercase transition-all duration-200 hover:opacity-50 ${linkColor} ${
                location.pathname === '/' ? 'opacity-100' : 'opacity-75'
              }`}
            >
              Home
            </Link>

            {/* Services dropdown */}
            <div className="relative group">
              <Link
                to="/services"
                className={`text-[14px] font-lato tracking-widest uppercase transition-all duration-200 hover:opacity-50 ${linkColor} ${
                  location.pathname.startsWith('/services') ? 'opacity-100' : 'opacity-75'
                }`}
              >
                Services
              </Link>
              <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className={`w-72 py-2 shadow-lg ${(navIsDark || navIsCharcoal) ? 'bg-forest border border-sand/10' : 'bg-cream border border-forest/8'}`}>
                  {services.map(s => (
                    <Link
                      key={s.slug}
                      to={`/services/${s.slug}`}
                      className={`flex items-start gap-3 px-5 py-3 transition-colors duration-150 ${
                        (navIsDark || navIsCharcoal)
                          ? 'hover:bg-sand/5 text-sand/70 hover:text-sand'
                          : 'hover:bg-forest/5 text-charcoal/60 hover:text-forest'
                      }`}
                    >
                      <span className="text-[9px] font-lato tracking-wide text-olive/50 pt-[3px] flex-shrink-0">{s.number}</span>
                      <span className="text-[12px] font-lato leading-snug">
                        {s.comingSoon ? <><em className="text-terracotta font-bold not-italic">Coming Soon: </em><em className="italic">{s.title}</em></> : s.title}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

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
                (isHome && !navBgVisible) || !useLightText
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
            <Link to="/services" className="font-cormorant text-4xl text-sand hover:text-sand/60 transition-colors">
              Services
            </Link>
            <div className="pl-4 flex flex-col gap-3 -mt-2">
              {services.map(s => (
                <Link key={s.slug} to={`/services/${s.slug}`} className="text-sand/50 text-sm font-lato hover:text-sand/80 transition-colors">
                  {s.comingSoon ? `Coming Soon: ${s.title}` : s.title}
                </Link>
              ))}
            </div>
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
