import { useState } from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import { services } from '../data/servicesData'
import ServiceSection from '../components/ServiceSection'
import SEO from '../components/SEO'

const EMPTY_FORM = {
  businessName: '', contactName: '', position: '', email: '',
  phone: '', businessType: '', wasteVolume: '', participation: '', comments: '', consent: false,
}

function InterestForm() {
  const [form, setForm] = useState(EMPTY_FORM)
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)

  const set = (field) => (e) =>
    setForm(f => ({ ...f, [field]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setError(false)
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: '17a236ad-5d28-4ec4-bedc-7e61e20fd717',
          subject: 'New Registration of Interest — Centralized Processing & Collection',
          ...form,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setSubmitted(true)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setSending(false)
    }
  }

  const inputClass = "w-full bg-transparent border-b border-forest/20 py-3 text-sm font-lato text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-forest/60 transition-colors duration-200"
  const labelClass = "block text-[10px] font-lato tracking-ultra uppercase text-forest/50 mb-1"

  if (submitted) {
    return (
      <div className="text-center py-16 lg:py-24">
        <div className="w-8 h-px bg-olive mx-auto mb-8" />
        <h3 className="font-cormorant font-semibold text-3xl lg:text-4xl text-forest mb-6 leading-snug">
          Thank you for your interest.
        </h3>
        <p className="text-charcoal/60 text-sm lg:text-base font-lato leading-relaxed max-w-xl mx-auto">
          Your submission helps demonstrate demand for better organic waste infrastructure in Phuket and will help guide the future development of the project.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl">
      <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">

        <div>
          <label className={labelClass}>Business Name</label>
          <input value={form.businessName} onChange={set('businessName')} className={inputClass} placeholder="Your organisation" />
        </div>
        <div>
          <label className={labelClass}>Contact Name *</label>
          <input required value={form.contactName} onChange={set('contactName')} className={inputClass} placeholder="Full name" />
        </div>
        <div>
          <label className={labelClass}>Position *</label>
          <input required value={form.position} onChange={set('position')} className={inputClass} placeholder="Role or title" />
        </div>
        <div>
          <label className={labelClass}>Email Address *</label>
          <input required type="email" value={form.email} onChange={set('email')} className={inputClass} placeholder="email@yourorganisation.com" />
        </div>
        <div>
          <label className={labelClass}>Phone Number</label>
          <input value={form.phone} onChange={set('phone')} className={inputClass} placeholder="+66 or international" />
        </div>
        <div>
          <label className={labelClass}>Business Type *</label>
          <select required value={form.businessType} onChange={set('businessType')} className={`${inputClass} bg-sand-mid`}>
            <option value="" disabled>Select type</option>
            {['Hotel / Resort', 'Restaurant / Café', 'School / University', 'Hospital / Healthcare', 'Market / Retail', 'Office Building', 'Shopping Centre', 'Residential Community', 'Government / Municipality', 'Other'].map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass}>Estimated Organic Waste Generated Per Day *</label>
          <input required value={form.wasteVolume} onChange={set('wasteVolume')} className={inputClass} placeholder="e.g. 50 kg, 200 kg" />
        </div>
        <div>
          <label className={labelClass}>Preferred Participation Method *</label>
          <select required value={form.participation} onChange={set('participation')} className={`${inputClass} bg-sand-mid`}>
            <option value="" disabled>Select preference</option>
            <option value="self-delivery">Self-delivery</option>
            <option value="collection">Collection service</option>
            <option value="either">Open to either option</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass}>Additional Comments</label>
          <textarea value={form.comments} onChange={set('comments')} rows={4} className={`${inputClass} resize-none`} placeholder="Any additional context, questions, or information" />
        </div>

      </div>

      {/* Consent */}
      <div className="flex items-start gap-4 mt-10 pt-8 border-t border-forest/8">
        <input
          required
          type="checkbox"
          id="consent"
          checked={form.consent}
          onChange={set('consent')}
          className="mt-1 flex-shrink-0 accent-forest w-4 h-4 cursor-pointer"
        />
        <label htmlFor="consent" className="text-sm font-lato text-charcoal/65 leading-relaxed cursor-pointer">
          Our organization would be interested in exploring participation in a future centralized organic waste recovery facility.
        </label>
      </div>

      <div className="mt-10">
        <button
          type="submit"
          disabled={sending}
          className="inline-block bg-forest hover:bg-forest/90 disabled:opacity-60 text-sand text-[10px] tracking-ultra uppercase font-lato px-12 py-4 transition-colors duration-200"
        >
          {sending ? 'Sending…' : 'Submit Interest'}
        </button>
        {error && (
          <p className="text-[10px] font-lato text-terracotta mt-4">
            Something went wrong. Please try again or email us directly.
          </p>
        )}
        <p className="text-charcoal/35 text-xs font-lato mt-4 leading-relaxed">
          Submitting this form does not create any obligation. It simply helps us understand potential demand.
        </p>
      </div>
    </form>
  )
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find(s => s.slug === slug)

  if (!service) return <Navigate to="/services" replace />

  const serviceIndex = services.findIndex(s => s.slug === slug)
  const prevService = serviceIndex > 0 ? services[serviceIndex - 1] : null
  const nextService = serviceIndex < services.length - 1 ? services[serviceIndex + 1] : null

  const seoTitles = {
    'on-site-composting': 'On-Site Composting Systems, Phuket | The Compost Bank',
    'organic-waste-management': 'Organic Waste & Food Waste Management Phuket | The Compost Bank',
    'bio-generator-projects': 'Biogas & Bio-Generator Projects Phuket | The Compost Bank',
    'centralized-processing': 'Organic Waste Collection & Processing Phuket | The Compost Bank',
  }

  const seoDescriptions = {
    'on-site-composting': 'On-site composting systems for Phuket hotels, resorts, and farms. Custom forced aeration technology designed around your food waste volumes and operational requirements.',
    'organic-waste-management': 'Organic waste and food waste management for Phuket businesses. Waste audits, staff training, and advisory to reduce waste and improve resource recovery.',
    'bio-generator-projects': 'Integrate biogas and waste-to-energy infrastructure into new developments from the design phase. Serving developers planning hotels and resorts in Phuket, Thailand.',
    'centralized-processing': 'Register your interest in The Compost Bank\'s future centralized organic waste collection and processing service for Phuket businesses without on-site capacity.',
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://thecompostbank.com/' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://thecompostbank.com/services' },
          { '@type': 'ListItem', position: 3, name: service.title, item: `https://thecompostbank.com/services/${service.slug}` },
        ],
      },
      {
        '@type': 'Service',
        '@id': `https://thecompostbank.com/services/${service.slug}#service`,
        name: service.title,
        description: seoDescriptions[service.slug] || service.summary,
        provider: {
          '@type': 'Organization',
          '@id': 'https://thecompostbank.com/#organization',
          name: 'The Compost Bank',
        },
        areaServed: { '@type': 'City', name: 'Phuket', addressCountry: 'TH' },
        url: `https://thecompostbank.com/services/${service.slug}`,
      },
    ],
  }

  return (
    <main>
      <SEO
        title={seoTitles[service.slug] || `${service.title} | The Compost Bank`}
        description={seoDescriptions[service.slug] || service.summary}
        path={`/services/${service.slug}`}
        structuredData={structuredData}
      />
      {/* Hero — title + intro description */}
      <section data-nav-dark className="bg-forest pt-28 pb-12 sm:pt-36 sm:pb-16 lg:pt-44 lg:pb-20 px-8 sm:px-12 lg:px-16 xl:px-20">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sand/40 text-[11px] font-lato tracking-widest uppercase hover:text-sand/70 transition-colors"
            >
              ← All Services
            </Link>
            <div className="flex items-center gap-3">
              {prevService && (
                <Link
                  to={`/services/${prevService.slug}`}
                  aria-label={`Previous: ${prevService.title}`}
                  className="w-10 h-10 flex items-center justify-center border border-sand/25 text-sand/50 hover:border-sand/60 hover:text-sand transition-all duration-200"
                >
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                    <path d="M10 3L5 8l5 5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              )}
              {nextService && (
                <Link
                  to={`/services/${nextService.slug}`}
                  aria-label={`Next: ${nextService.title}`}
                  className="w-10 h-10 flex items-center justify-center border border-sand/25 text-sand/50 hover:border-sand/60 hover:text-sand transition-all duration-200"
                >
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                    <path d="M6 3l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              )}
            </div>
          </div>
          <p className="text-sand/35 text-[13px] tracking-ultra uppercase font-lato mb-6">{service.number}</p>
          <h1 className="font-cormorant font-semibold text-5xl sm:text-6xl lg:text-7xl text-sand leading-[1.04] mb-8">
            {service.comingSoon && <span className="font-bold text-terracotta">Coming Soon: </span>}
            {service.comingSoon ? <em className="italic">{service.title}</em> : service.title}
          </h1>
          {service.description && (
            <>
              {service.description.heading && (
                <h2 className="font-cormorant text-2xl lg:text-3xl text-sand/80 mb-5 leading-snug">
                  {service.description.heading}
                </h2>
              )}
              <div className="w-10 h-px bg-sand/15 mb-6" />
              <p className="text-sand/60 text-sm lg:text-base font-lato leading-relaxed max-w-2xl">
                {service.description.body}
              </p>
            </>
          )}
          {service.id === 'centralized' && (
            <a
              href="#register-interest"
              className="inline-block mt-8 text-[10px] font-lato tracking-ultra uppercase border border-sand/35 text-sand px-10 py-3.5 hover:bg-sand/10 hover:border-sand/60 transition-all duration-200"
            >
              Register Your Interest
            </a>
          )}
        </div>
      </section>

      {/* Details — who, included, why on cream */}
      <ServiceSection {...service} description={null} showHeader={false} imageContain={service.imageContain} imageFullHeight={service.imageFullHeight} imageWide={service.imageWide} />

      {/* Register Interest — service 04 only */}
      {service.id === 'centralized' && (
        <section id="register-interest" className="bg-sand-mid py-24 lg:py-36 px-8 sm:px-12 lg:px-16 xl:px-20">
          <div className="max-w-screen-xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">

              {/* Left — heading + intro */}
              <div className="lg:pt-1">
                <p className="text-[10px] font-lato tracking-ultra uppercase text-olive mb-6">Centralized Network</p>
                <h2 className="font-cormorant font-semibold text-3xl lg:text-4xl xl:text-5xl text-forest leading-[1.08] mb-7">
                  Register Your Interest
                </h2>
                <div className="w-8 h-px bg-forest/15 mb-7" />
                <div className="space-y-4 text-charcoal/60 text-sm font-lato leading-relaxed">
                  <p>
                    The Compost Bank is currently assessing demand for a future centralized organic waste processing facility in Phuket.
                  </p>
                  <p>
                    If your organization would be interested in diverting organic waste through a future recovery network, we invite you to register your interest below.
                  </p>
                  <p>
                    Submitting this form does not create any obligation. It simply helps us understand potential demand and supports the development of the infrastructure needed to recover organic waste on the island.
                  </p>
                </div>
              </div>

              {/* Right — form */}
              <InterestForm />
            </div>
          </div>
        </section>
      )}

      {/* Footer image — gradient blend */}
      {service.footerImage && (
        <section
          className="h-72 sm:h-96 lg:h-[500px]"
          style={{
            backgroundImage: `linear-gradient(270deg, rgba(46,58,47,0.96) 0%, rgba(46,58,47,0.75) 15%, rgba(46,58,47,0.35) 30%, rgba(46,58,47,0.08) 45%, rgba(46,58,47,0) 60%), url('${service.footerImage}')`,
            backgroundSize: 'contain',
            backgroundPosition: 'center center',
          }}
        />
      )}

      {/* CTA */}
      {!service.hideCTA && (
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
      )}
    </main>
  )
}
