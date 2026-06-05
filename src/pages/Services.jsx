import { Link } from 'react-router-dom'

const PageHero = ({ label, title, subtitle }) => (
  <section className="bg-forest pt-40 pb-24 lg:pt-52 lg:pb-32 px-8 sm:px-12 lg:px-16 xl:px-20">
    <div className="max-w-screen-xl mx-auto">
      <p className="text-sand/35 text-[9px] tracking-ultra uppercase font-lato mb-8">{label}</p>
      <h1 className="font-cormorant font-semibold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-sand leading-[1.04] max-w-3xl">
        {title}
      </h1>
      {subtitle && (
        <>
          <div className="w-10 h-px bg-sand/15 my-8" />
          <p className="text-sand/55 text-sm lg:text-base font-lato leading-relaxed max-w-xl">{subtitle}</p>
        </>
      )}
    </div>
  </section>
)

const SectionDivider = () => (
  <div className="max-w-screen-xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
    <div className="h-px bg-forest/10" />
  </div>
)

const ServiceSection = ({ id, number, title, forWho, included, whyMatters, image, flipped }) => (
  <section id={id} className="py-24 lg:py-40 px-8 sm:px-12 lg:px-16 xl:px-20 bg-cream">
    <div className="max-w-screen-xl mx-auto">

      {/* Header */}
      <div className="flex items-start gap-5 mb-16">
        <span className="text-[9px] font-lato tracking-ultra uppercase text-olive/50 pt-1.5 flex-shrink-0">{number}</span>
        <h2 className="font-cormorant font-semibold text-4xl lg:text-5xl xl:text-6xl text-forest leading-[1.06]">
          {title}
        </h2>
      </div>

      {/* Content grid */}
      <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-start ${flipped ? 'lg:[&>*:first-child]:order-2' : ''}`}>

        {/* Image */}
        {image && (
          <div className="h-64 sm:h-80 lg:h-[480px] overflow-hidden img-zoom">
            <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
          </div>
        )}

        {/* Details */}
        <div>
          {/* Who it's for */}
          <div className="mb-10">
            <p className="text-[9px] font-lato tracking-ultra uppercase text-olive mb-4">Who It Is For</p>
            <p className="text-charcoal/70 text-sm lg:text-base font-lato leading-relaxed">{forWho}</p>
          </div>

          <div className="w-full h-px bg-forest/8 mb-10" />

          {/* What's included */}
          <div className="mb-10">
            <p className="text-[9px] font-lato tracking-ultra uppercase text-olive mb-6">What Is Included</p>
            <ul className="space-y-3.5">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm font-lato text-charcoal/65 leading-relaxed">
                  <span className="w-4 h-px bg-olive/40 flex-shrink-0 mt-[10px]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full h-px bg-forest/8 mb-10" />

          {/* Why it matters */}
          <div>
            <p className="text-[9px] font-lato tracking-ultra uppercase text-olive mb-4">Why It Matters</p>
            <p className="text-charcoal/65 text-sm lg:text-base font-lato leading-relaxed">{whyMatters}</p>
          </div>

          <div className="mt-10">
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

export default function Services() {
  return (
    <main>
      <PageHero
        label="What We Do"
        title="Practical solutions for organic waste."
        subtitle="Four service areas designed to meet businesses where they are — and bring them to where they need to be."
      />

      <ServiceSection
        id="onsite"
        number="01"
        title="On-Site Composting Systems"
        image={{ src: '/images/brand-grid.png', alt: 'On-site composting infrastructure' }}
        forWho="Hotels, resorts, large restaurants, farms, golf courses, and new property developments with available outdoor space and sufficient organic waste volumes to justify a dedicated on-site system. Typically suited to businesses generating more than 100kg of organic waste per day."
        included={[
          'Site assessment and organic waste volume audit',
          'Custom system design and capacity planning',
          'Full infrastructure build — bays, aeration, drainage',
          'Equipment supply and installation',
          'Staff training and operational SOPs',
          'Ongoing monitoring, maintenance, and advisory support',
          'Compost quality testing and certification',
        ]}
        whyMatters="An on-site system eliminates disposal fees, turns waste into a premium soil amendment, and demonstrates genuine environmental commitment. It keeps value on your property — and keeps organic matter out of landfill."
      />

      <SectionDivider />

      <ServiceSection
        id="consultancy"
        number="02"
        title="Organic Waste Consultancy"
        image={{ src: '/images/hands-compost.png', alt: 'Hands examining rich compost' }}
        flipped
        forWho="Any business generating organic waste that wants to understand its current situation, identify opportunities for improvement, and develop a clear action plan — whether or not they are ready to build infrastructure."
        included={[
          'Organic waste stream audit and characterisation',
          'Current cost and disposal analysis',
          'Identification of reduction and recovery opportunities',
          'Strategic recommendations and prioritised action plan',
          'Supplier and technology research and recommendations',
          'Staff awareness and behaviour change support',
          'Regulatory and compliance guidance',
        ]}
        whyMatters="Most businesses do not know exactly what they are throwing away or what it is costing them. A clear audit creates the foundation for every other decision — and often reveals savings that pay for the consultancy immediately."
      />

      <SectionDivider />

      <ServiceSection
        id="centralized"
        number="03"
        title="Centralized Processing & Collection"
        image={{ src: '/images/aerial.png', alt: 'Centralized composting facility' }}
        forWho="Businesses of any size that want to divert organic waste from landfill but lack the space, budget, or operational capacity to build their own system. Ideal for smaller hotels, restaurants, cafes, markets, and office buildings."
        included={[
          'Regular scheduled collection of sorted organic waste',
          'Sorting and quality assessment on arrival at facility',
          'Processing at our centralized composting infrastructure',
          'Monthly reporting on volumes diverted and compost produced',
          'Staff training materials for correct source separation',
          'Optional compost returns for gardens and landscaping',
          'Carbon and diversion certificates available',
        ]}
        whyMatters="Not every business needs to own infrastructure to do the right thing. Centralized processing gives every business access to the circular economy — regardless of their size, space, or resources. You sort. We handle the rest."
      />

      <SectionDivider />

      <ServiceSection
        id="biogenerator"
        number="04"
        title="Bio-Generator Projects"
        image={{ src: '/images/brand-grid.png', alt: 'Bio-generator and energy infrastructure' }}
        flipped
        forWho="Large-scale organic waste generators — hotels, resorts, food processors, municipalities, or developers — with sufficient waste volumes to justify investment in anaerobic digestion or biogas technology. Best suited to new development projects where infrastructure can be designed in from the outset."
        included={[
          'Feasibility assessment and business case development',
          'Technology selection and supplier sourcing',
          'System design and engineering oversight',
          'Planning and regulatory support',
          'Construction management and commissioning',
          'Operator training and performance monitoring',
          'Revenue and carbon credit advisory',
        ]}
        whyMatters="Biogas systems transform organic waste into renewable energy, heat, and high-quality digestate — turning a cost centre into a revenue stream. For large waste generators, this is the highest-value pathway available."
      />

      {/* CTA */}
      <section className="bg-forest py-24 lg:py-36 px-8 sm:px-12 lg:px-16 xl:px-20 text-center">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-sand/30 text-[9px] tracking-ultra uppercase font-lato mb-8">Not sure where to start?</p>
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
