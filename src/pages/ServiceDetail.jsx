import { useParams, Navigate, Link } from 'react-router-dom'
import { services } from '../data/servicesData'
import ServiceSection from '../components/ServiceSection'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find(s => s.slug === slug)

  if (!service) return <Navigate to="/services" replace />

  return (
    <main>
      {/* Hero — title + intro description */}
      <section data-nav-dark className="bg-forest pt-36 pb-16 lg:pt-44 lg:pb-20 px-8 sm:px-12 lg:px-16 xl:px-20">
        <div className="max-w-screen-xl mx-auto">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sand/40 text-[11px] font-lato tracking-widest uppercase mb-8 hover:text-sand/70 transition-colors"
          >
            ← All Services
          </Link>
          <p className="text-sand/35 text-[13px] tracking-ultra uppercase font-lato mb-6">{service.number}</p>
          <h1 className="font-cormorant font-semibold text-5xl sm:text-6xl lg:text-7xl text-sand leading-[1.04] whitespace-nowrap mb-8">
            {service.comingSoon && <span className="font-bold text-terracotta">Coming Soon: </span>}
            {service.comingSoon ? <em className="italic">{service.title}</em> : service.title}
          </h1>
          {service.description && (
            <>
              {service.description.heading && (
                <h2 className="font-cormorant text-2xl lg:text-3xl text-sand/80 mb-5 leading-snug whitespace-nowrap">
                  {service.description.heading}
                </h2>
              )}
              <div className="w-10 h-px bg-sand/15 mb-6" />
              <p className="text-sand/60 text-sm lg:text-base font-lato leading-relaxed max-w-2xl">
                {service.description.body}
              </p>
            </>
          )}
        </div>
      </section>

      {/* Details — who, included, why on cream */}
      <ServiceSection {...service} description={null} showHeader={false} />

      {/* CTA */}
      <section data-nav-dark className="bg-forest py-16 lg:py-24 px-8 sm:px-12 lg:px-16 xl:px-20 text-center">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-sand/30 text-[13px] tracking-ultra uppercase font-lato mb-8">Get In Touch</p>
          <h2 className="font-cormorant font-semibold text-4xl lg:text-5xl text-sand leading-[1.06] mb-8 max-w-xl mx-auto">
            Interested in this service?
          </h2>
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
