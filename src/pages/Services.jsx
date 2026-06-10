import { Link } from 'react-router-dom'
import { services } from '../data/servicesData'
import SEO from '../components/SEO'

export default function Services() {
  return (
    <main>
      <SEO
        title="Our Services | Organic Waste Solutions in Phuket"
        description="Practical organic waste solutions for Phuket businesses. On-site composting systems, waste management support, bio-generator projects, and centralized processing infrastructure."
        path="/services"
      />
      {/* Hero */}
      <section data-nav-dark className="relative overflow-hidden bg-forest pt-36 pb-12 sm:pt-44 sm:pb-16 lg:pt-64 lg:pb-20 px-8 sm:px-12 lg:px-16 xl:px-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(46,58,47,0.96) 0%, rgba(46,58,47,0.96) 55%, rgba(46,58,47,0.7) 70%, rgba(46,58,47,0.2) 85%, rgba(46,58,47,0) 100%), url('/Images/palm.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        />
        <div className="max-w-screen-xl mx-auto relative z-10">
          <p className="text-sand/35 text-[13px] tracking-ultra uppercase font-lato mb-6">What We Do</p>
          <h1 className="font-cormorant font-semibold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-sand leading-[1.04] max-w-3xl">
            Practical solutions for organic waste.
          </h1>
          <div className="w-10 h-px bg-sand/15 my-6" />
          <p className="text-sand/55 text-sm lg:text-base font-lato leading-relaxed max-w-xl">
            Four service areas designed to meet businesses where they are — and bring them to where they need to be.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="bg-cream py-14 lg:py-20 px-8 sm:px-12 lg:px-16 xl:px-20">
        <div className="max-w-screen-xl mx-auto">
          <div>
            {services.map((s, i) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className={`group flex items-start gap-6 lg:gap-12 py-8 -mx-4 px-4 hover:bg-forest/10 transition-colors duration-300 ${
                  s.comingSoon
                    ? 'mt-6 border-t-2 border-forest/20'
                    : i > 0
                    ? 'border-t border-forest/8'
                    : ''
                }`}
              >
                <span className="font-cormorant font-light text-4xl text-forest flex-shrink-0 w-10 leading-none">{s.number}</span>
                <div className="flex-1 flex flex-col lg:flex-row lg:items-start lg:gap-10">
                  <h2 className="font-cormorant text-2xl lg:text-[28px] mb-2 lg:mb-0 lg:w-72 xl:w-80 flex-shrink-0 leading-snug text-forest group-hover:text-olive group-hover:font-bold transition-all">
                    {s.comingSoon ? (
                      <>
                        <span className="font-bold text-terracotta">Coming Soon: </span>
                        <em className="italic">{s.title}</em>
                      </>
                    ) : s.title}
                  </h2>
                  <p className="text-charcoal/55 text-sm font-lato leading-relaxed flex-1">{s.summary}</p>
                </div>
                <span className="hidden lg:block text-forest/20 group-hover:text-olive/60 transition-colors flex-shrink-0 pt-1 text-lg">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section data-nav-dark className="bg-forest py-16 lg:py-24 px-8 sm:px-12 lg:px-16 xl:px-20 text-center">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-sand/30 text-[13px] tracking-ultra uppercase font-lato mb-8">Not sure where to start?</p>
          <h2 className="font-cormorant font-semibold text-4xl lg:text-5xl text-sand leading-[1.06] mb-8 max-w-xl mx-auto">
            Start with a conversation.
          </h2>
          <p className="text-sand/50 text-sm font-lato leading-relaxed max-w-md mx-auto mb-10">
            We'll help you understand your waste streams, identify the right pathway, and build a plan that fits your business.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-sand hover:bg-sand/90 text-forest text-[10px] tracking-ultra uppercase font-lato px-12 py-4 transition-colors duration-200"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}
