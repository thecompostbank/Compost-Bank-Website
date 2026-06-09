import { Link } from 'react-router-dom'

export default function ServiceSection({ id, number, title, description, forWho, included, includedLabel, whyMatters, image, flipped, comingSoon, showHeader = true, imageContain = false }) {
  return (
    <section id={id} className="py-14 lg:py-20 px-8 sm:px-12 lg:px-16 xl:px-20 bg-cream">
      <div className="max-w-screen-xl mx-auto">

        {/* Header */}
        {showHeader && (
          <div className="flex items-start gap-5 mb-8">
            <span className="text-[13px] font-lato tracking-ultra uppercase text-olive/50 pt-1.5 flex-shrink-0">{number}</span>
            <h2 className="font-cormorant font-semibold text-4xl lg:text-5xl xl:text-6xl text-forest leading-[1.06]">
              {comingSoon && <span className="font-bold text-terracotta">Coming Soon: </span>}
              {comingSoon ? <em className="italic">{title}</em> : title}
            </h2>
          </div>
        )}

        {/* Content grid */}
        <div className={`grid lg:grid-cols-2 gap-8 lg:gap-14 items-start ${flipped ? 'lg:[&>*:first-child]:order-2' : ''}`}>

          {/* Image */}
          {image && (
            <div className={imageContain ? '' : 'h-56 sm:h-72 lg:h-[400px] overflow-hidden img-zoom'}>
              <img src={image.src} alt={image.alt} className={imageContain ? 'w-full h-auto' : 'w-full h-full object-cover'} />
            </div>
          )}

          {/* Details */}
          <div>
            {/* Intro description */}
            {description && (
              <div className="mb-7">
                {description.heading && (
                  <h3 className="font-cormorant text-2xl lg:text-3xl text-forest mb-3 leading-snug">{description.heading}</h3>
                )}
                <p className="text-charcoal/65 text-sm font-lato leading-relaxed">{description.body}</p>
              </div>
            )}

            {description && <div className="w-full h-px bg-forest/8 mb-7" />}

            {/* Who it's for */}
            <div className="mb-7">
              <p className="text-[13px] font-lato tracking-ultra uppercase text-olive mb-3">Who We Work With</p>
              <p className="text-charcoal/70 text-sm font-lato leading-relaxed">{forWho}</p>
            </div>

            <div className="w-full h-px bg-forest/8 mb-7" />

            {/* What's included */}
            <div className="mb-7">
              <p className="text-[13px] font-lato tracking-ultra uppercase text-olive mb-4">{includedLabel || 'What Is Included'}</p>
              <ul className="space-y-2">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm font-lato text-charcoal/65 leading-relaxed">
                    <span className="w-4 h-px bg-olive/40 flex-shrink-0 mt-[10px]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {whyMatters && <div className="w-full h-px bg-forest/8 mb-7" />}

            {/* Why it matters */}
            {whyMatters && (
              <div>
                <p className="text-[13px] font-lato tracking-ultra uppercase text-olive mb-3">Why It Matters</p>
                <p className="text-charcoal/65 text-sm font-lato leading-relaxed">{whyMatters}</p>
              </div>
            )}

            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-block text-[9.5px] font-lato tracking-ultra uppercase border border-forest/30 text-forest px-8 py-3.5 hover:bg-forest hover:text-sand hover:border-forest transition-all duration-200"
              >
                Enquire About This Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
