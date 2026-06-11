import { Link } from 'react-router-dom'

const projects = [
  {
    id: 'hotel-audit',
    category: 'Organic Waste Consultancy',
    title: 'Hotel Organic Waste Audit',
    location: 'Patong, Phuket',
    year: '2024',
    image: '/images/hands-compost.png',
    summary:
      "A comprehensive audit of organic waste streams across a 200-room beachfront hotel — covering kitchen, F&B, gardens, and housekeeping. The audit identified significant reduction opportunities and an on-site composting pathway that would eliminate existing disposal costs entirely.",
    outcomes: [
      'Full waste characterisation across 6 departments',
      'Annual disposal cost reduction identified: 40%',
      'On-site composting system recommended and scoped',
    ],
    span: 'lg:col-span-2',
    tall: true,
  },
  {
    id: 'onsite-system',
    category: 'On-Site Composting System',
    title: 'Resort Composting Infrastructure',
    location: 'Rawai, Phuket',
    year: '2024',
    image: '/images/brand-grid.png',
    summary:
      'Design and build of a 10-bay composting system for a boutique eco-resort. The system processes 150kg of organic waste daily and produces high-quality compost used in the resort\'s organic gardens.',
    outcomes: [
      '150kg organic waste processed daily',
      'Compost used across resort gardens',
      'Full staff training and SOP delivery',
    ],
    span: 'lg:col-span-1',
    tall: false,
  },
  {
    id: 'centralized-pilot',
    category: 'Centralized Processing',
    title: 'Centralized Processing Pilot',
    location: 'Chalong, Phuket',
    year: '2023',
    image: '/images/aerial.png',
    summary:
      "A pilot program connecting 12 restaurants and two boutique hotels to a centralized organic waste collection and processing operation. The pilot validated the model's commercial viability and operational logistics.",
    outcomes: [
      '14 businesses connected in pilot phase',
      '2.4 tons organic waste diverted weekly',
      'Model confirmed for commercial scale-up',
    ],
    span: 'lg:col-span-1',
    tall: false,
  },
  {
    id: 'community',
    category: 'Community Program',
    title: 'Community Composting Program',
    location: 'Rawai & Nai Harn, Phuket',
    year: '2023',
    image: '/images/brand-grid.png',
    summary:
      "A community-level composting initiative in partnership with local community organisations — establishing shared composting hubs, training household and small business participants, and distributing finished compost to local farmers.",
    outcomes: [
      '60+ households participating',
      '3 community composting hubs established',
      'Compost supplied to 4 local farms',
    ],
    span: 'lg:col-span-2',
    tall: false,
  },
]

export default function Projects() {
  return (
    <main>
      {/* Hero */}
      <section data-nav-dark className="bg-forest pt-40 pb-24 lg:pt-52 lg:pb-32 px-8 sm:px-12 lg:px-16 xl:px-20">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-sand/35 text-[13px] tracking-ultra uppercase font-lato mb-8">Our Work</p>
          <h1 className="font-cormorant font-semibold text-5xl sm:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl text-sand leading-[1.04] max-w-3xl">
            Projects that prove the principle.
          </h1>
          <div className="w-10 h-px bg-sand/15 my-8" />
          <p className="text-sand/55 text-sm lg:text-base font-lato leading-relaxed max-w-xl">
            From single-property audits to centralized processing infrastructure — work that is changing how Phuket handles its organic waste.
          </p>
        </div>
      </section>

      {/* Project grid */}
      <section className="bg-cream py-16 lg:py-24 px-8 sm:px-12 lg:px-16 xl:px-20">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-forest/8">
            {projects.map((p) => (
              <article key={p.id} className={`bg-cream group ${p.span}`}>
                {/* Image */}
                <div className={`overflow-hidden img-zoom ${p.tall ? 'h-72 sm:h-96 lg:h-[480px]' : 'h-60 sm:h-80'}`}>
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Content */}
                <div className="p-8 lg:p-10">
                  <div className="flex items-center gap-4 mb-5">
                    <span className="text-[8.5px] font-lato tracking-ultra uppercase text-olive">
                      {p.category}
                    </span>
                    <span className="text-forest/20 text-xs">·</span>
                    <span className="text-[8.5px] font-lato tracking-wide text-charcoal/35">{p.year}</span>
                  </div>
                  <h2 className="font-cormorant font-semibold text-2xl lg:text-3xl text-forest leading-snug mb-4">
                    {p.title}
                  </h2>
                  <p className="text-[10px] font-lato text-terracotta/70 tracking-widest uppercase mb-5">{p.location}</p>
                  <div className="w-8 h-px bg-forest/12 mb-5" />
                  <p className="text-charcoal/60 text-sm font-lato leading-relaxed mb-6">
                    {p.summary}
                  </p>
                  {/* Outcomes */}
                  <div className="space-y-2.5">
                    {p.outcomes.map((o) => (
                      <div key={o} className="flex items-start gap-3">
                        <span className="w-3 h-px bg-olive/40 flex-shrink-0 mt-[9px]" />
                        <p className="text-[12px] font-lato text-charcoal/55 leading-relaxed">{o}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quote break */}
      <section data-nav-dark className="relative bg-forest py-24 lg:py-36 px-8 sm:px-12 lg:px-16 xl:px-20 overflow-hidden">
        <div className="max-w-screen-xl mx-auto text-center">
          <p className="font-cormorant text-3xl lg:text-4xl xl:text-5xl text-sand/70 italic leading-snug max-w-3xl mx-auto">
            "Every ton of organic waste diverted from landfill is a ton of carbon kept out of the atmosphere, and a ton of nutrients returned to the soil."
          </p>
          <div className="w-8 h-px bg-sand/20 mx-auto mt-8" />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream py-24 lg:py-36 px-8 sm:px-12 lg:px-16 xl:px-20 text-center">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-olive text-[13px] tracking-ultra uppercase font-lato mb-8">Start Your Project</p>
          <h2 className="font-cormorant font-semibold text-4xl lg:text-5xl text-forest leading-[1.06] mb-8 max-w-xl mx-auto">
            Ready to become a case study?
          </h2>
          <Link
            to="/contact"
            className="inline-block bg-forest hover:bg-forest/85 text-sand text-[10px] tracking-ultra uppercase font-lato px-12 py-4 transition-colors duration-200"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}
