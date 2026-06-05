import { Link } from 'react-router-dom'

const steps = [
  {
    number: '01',
    title: 'Assess',
    headline: 'We start by understanding your waste.',
    body: "Every engagement begins with a thorough assessment of your organic waste streams — what you're generating, how much, where it comes from, and what it's currently costing you. We walk your site, speak with your team, and review your operations to build a complete picture.",
    details: [
      'On-site waste audit and characterisation',
      'Volume measurement and composition analysis',
      'Current cost and disposal pathway review',
      'Staff interviews and operational mapping',
    ],
    outcome: 'A clear understanding of your starting point — and the opportunity within it.',
  },
  {
    number: '02',
    title: 'Design',
    headline: 'We design a system built for your operation.',
    body: "No two businesses are the same. We use the findings from the assessment to design an approach that fits your space, your volumes, your team, and your budget. Whether that means an on-site composting system, a connection to centralized collection, or a biogas solution — we design for practicality and performance.",
    details: [
      'System type selection and pathway recommendation',
      'Infrastructure design and capacity modelling',
      'Equipment specification and supplier sourcing',
      'Staff workflow and SOP design',
    ],
    outcome: 'A practical, costed design ready for implementation.',
  },
  {
    number: '03',
    title: 'Build',
    headline: 'We build the infrastructure.',
    body: 'For on-site systems and bio-generator projects, we manage the full build process — from groundworks and civil construction through to equipment installation and commissioning. We work with trusted local contractors and suppliers to deliver on time and on budget.',
    details: [
      'Civil works, drainage, and bays construction',
      'Equipment installation and commissioning',
      'Quality checks and system performance testing',
      'Health, safety, and environmental compliance',
    ],
    outcome: 'A fully operational composting or processing system, ready to use.',
  },
  {
    number: '04',
    title: 'Train',
    headline: 'We train your team to run it well.',
    body: 'The best infrastructure is only as good as the people operating it. We deliver hands-on training for your team — from kitchen staff separating waste at source to facilities managers maintaining the system — and provide clear written SOPs and reference materials that stay with you.',
    details: [
      'Hands-on operational training for all relevant staff',
      'Source separation training for kitchen and housekeeping teams',
      'Written SOPs and visual guides for every process',
      'Train-the-trainer sessions for sustained capability',
    ],
    outcome: 'A team that can run the system confidently — without needing us every day.',
  },
  {
    number: '05',
    title: 'Monitor',
    headline: 'We stay with you for the long term.',
    body: 'Composting systems require attention, adjustment, and ongoing optimisation. We provide regular monitoring visits, remote advisory support, and monthly performance reports — tracking the volumes you divert, the compost you produce, and the carbon you save.',
    details: [
      'Regular site monitoring visits and system checks',
      'Monthly performance reports — volumes, compost output, CO₂ avoided',
      'Remote advisory and troubleshooting support',
      'Annual system review and optimisation recommendations',
    ],
    outcome: 'Consistent performance, continuous improvement, and the data to prove your impact.',
  },
]

export default function HowItWorks() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-forest pt-40 pb-24 lg:pt-52 lg:pb-32 px-8 sm:px-12 lg:px-16 xl:px-20">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-sand/35 text-[9px] tracking-ultra uppercase font-lato mb-8">The Process</p>
          <h1 className="font-cormorant font-semibold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-sand leading-[1.04] max-w-3xl">
            Five steps to a circular operation.
          </h1>
          <div className="w-10 h-px bg-sand/15 my-8" />
          <p className="text-sand/55 text-sm lg:text-base font-lato leading-relaxed max-w-xl">
            From first conversation to long-term partnership — a systematic, practical process built on deep operational experience.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-cream py-16 lg:py-0">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`grid lg:grid-cols-[200px_1fr] gap-8 lg:gap-16 py-20 lg:py-28 ${
                i < steps.length - 1 ? 'border-b border-forest/8' : ''
              }`}
            >
              {/* Step label */}
              <div className="flex flex-row lg:flex-col items-start gap-4 lg:gap-0">
                <span className="font-cormorant text-7xl lg:text-8xl text-forest/12 font-light leading-none flex-shrink-0">
                  {step.number}
                </span>
                <div className="lg:mt-4">
                  <span className="inline-block text-[9px] font-lato tracking-ultra uppercase bg-forest text-sand px-4 py-2">
                    {step.title}
                  </span>
                </div>
              </div>

              {/* Step content */}
              <div>
                <h2 className="font-cormorant font-semibold text-3xl lg:text-4xl xl:text-5xl text-forest leading-[1.08] mb-6">
                  {step.headline}
                </h2>
                <p className="text-charcoal/60 text-sm lg:text-base font-lato leading-relaxed mb-8 max-w-2xl">
                  {step.body}
                </p>

                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-8">
                  {step.details.map((d) => (
                    <div key={d} className="flex items-start gap-3">
                      <span className="w-4 h-px bg-olive/40 flex-shrink-0 mt-[10px]" />
                      <p className="text-sm font-lato text-charcoal/55 leading-relaxed">{d}</p>
                    </div>
                  ))}
                </div>

                <div className="flex items-start gap-3 p-5 bg-forest/[0.04] border-l-2 border-olive/40">
                  <span className="text-[9px] font-lato tracking-ultra uppercase text-olive flex-shrink-0 mt-0.5">Outcome</span>
                  <p className="text-sm font-lato text-charcoal/65 italic leading-relaxed">{step.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Full width image break */}
      <section className="h-72 sm:h-96 lg:h-[500px] overflow-hidden img-zoom">
        <img
          src="/images/aerial.png"
          alt="Compost Bank composting facility"
          className="w-full h-full object-cover"
        />
      </section>

      {/* CTA */}
      <section className="bg-forest py-24 lg:py-36 px-8 sm:px-12 lg:px-16 xl:px-20 text-center">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-sand/30 text-[9px] tracking-ultra uppercase font-lato mb-8">Ready to Begin?</p>
          <h2 className="font-cormorant font-semibold text-4xl lg:text-5xl text-sand leading-[1.06] mb-8 max-w-xl mx-auto">
            Step one starts with a conversation.
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
