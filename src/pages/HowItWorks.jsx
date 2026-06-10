import { Link } from 'react-router-dom'

const steps = [
  {
    number: '01',
    title: 'Assess',
    headline: 'We start by understanding your operation.',
    body: "Every engagement begins with a thorough assessment of your organic waste streams — what you're generating, how much, where it comes from, and what it's currently costing you. We walk your site, speak with your team, and review your operations to build a complete picture.",
    details: [
      'Organic waste stream assessment and characterization',
      'Current management practices and disposal pathway review',
      'Waste volume analysis and infrastructure planning',
      'Operational workflow and stakeholder mapping',
    ],
    outcome: 'A clear understanding of your current situation, future needs, and the opportunities within them.',
  },
  {
    number: '02',
    title: 'Design',
    headline: 'We design the right solution for your needs.',
    body: "No two businesses are the same. We use the findings from the assessment to design an approach that fits your space, your volumes, your team, and your budget. Whether that means operational improvements, an on-site composting system, a future biogas project, or a pathway toward centralized processing, we develop practical solutions tailored to your goals, constraints, and resources.",
    details: [
      'System type selection and pathway recommendation',
      'Infrastructure design and capacity planning',
      'Operational procedures and workflow design',
      'Material sourcing and implementation planning',
    ],
    outcome: 'A practical roadmap designed around your operation, objectives, and long-term success.',
  },
  {
    number: '03',
    title: 'Build',
    headline: 'We bring the solution to life.',
    body: 'For infrastructure projects, we manage the implementation process from design through commissioning. For operational support projects, we help implement systems, procedures, and workflows that create lasting change.',
    details: [
      'Infrastructure construction and implementation',
      'Equipment installation and commissioning',
      'Operational systems and process deployment',
      'Quality assurance and performance verification',
    ],
    outcome: 'A solution that is implemented, operational, and ready to deliver measurable results.',
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
    outcome: 'A confident team with the knowledge and tools needed to run the system successfully.',
  },
  {
    number: '05',
    title: 'Monitor',
    headline: 'We stay with you for the long term.',
    body: 'Composting systems require attention, adjustment, and ongoing optimisation. We provide regular monitoring visits, remote advisory support, and monthly performance reports — tracking the volumes you divert, the compost you produce, and the carbon you save.',
    details: [
      'Regular site monitoring visits and system checks',
      'Remote advisory and troubleshooting support',
      'Performance tracking and impact reporting',
      'Annual review and optimisation recommendations',
    ],
    outcome: 'Continuous improvement, measurable impact, and support when you need it.',
  },
]

export default function HowItWorks() {
  return (
    <main>
      {/* Hero */}
      <section
        data-nav-dark
        className="relative overflow-hidden pt-52 pb-24 lg:pt-64 lg:pb-32 px-8 sm:px-12 lg:px-16 xl:px-20"
        style={{
          backgroundImage: `linear-gradient(rgba(46,58,47,0.65), rgba(46,58,47,0.65)), url('/Images/lime.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      >
        <div className="max-w-screen-xl mx-auto relative z-10">
          <p className="text-sand/35 text-[13px] tracking-ultra uppercase font-lato mb-8">The Process</p>
          <h1 className="font-cormorant font-semibold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-sand leading-[1.04] max-w-3xl">
            Five steps to a circular operation.
          </h1>
          <div className="w-10 h-px bg-sand/15 my-8" />
          <p className="text-sand/55 text-sm lg:text-base font-lato leading-relaxed max-w-xl">
            Every project is different, but our approach remains the same: understand the challenge, design the right solution, implement it properly, and provide the support needed for long-term success.
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
                  <span className="inline-block text-sm font-lato tracking-ultra uppercase bg-forest text-sand px-4 py-2">
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

      {/* CTA */}
      <section data-nav-dark className="bg-forest py-24 lg:py-36 px-8 sm:px-12 lg:px-16 xl:px-20 text-center">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-sand/30 text-[13px] tracking-ultra uppercase font-lato mb-8">Ready to Begin?</p>
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
