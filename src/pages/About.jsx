import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const ContourPattern = ({ opacity = '0.06' }) => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none"
    viewBox="0 0 1440 700"
    preserveAspectRatio="xMidYMid slice"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ opacity }}
  >
    <g stroke="#2E3A2F" strokeWidth="1">
      {[60, 110, 160, 210, 260, 310, 360, 410, 460, 510, 560, 610].map((y, i) => (
        <path
          key={y}
          d={`M-200,${y} C${150 + i * 20},${y - 12} ${400 - i * 10},${y + 15} ${700 + i * 5},${y - 8} C${1000 - i * 8},${y + 10} ${1280 + i * 6},${y - 5} 1640,${y}`}
        />
      ))}
    </g>
  </svg>
)

const values = [
  {
    title: 'Education & Empowerment',
    body: 'We believe meaningful change begins with understanding. Through education, transparency, and leading by example, we help individuals and organizations see waste differently and take action with confidence.',
    image: '/Images/hands-compost.png',
  },
  {
    title: 'Collective Responsibility',
    body: 'No single business, community, or government can solve the waste challenge alone. We believe lasting progress is built through collaboration, shared responsibility, and collective action.',
    image: '/Images/aerial.png',
  },
  {
    title: 'Regeneration',
    body: 'Organic waste should be returned to the earth, not buried in landfill. We believe healthy soils, thriving ecosystems, and sustainable agriculture depend on keeping valuable nutrients in circulation and restoring natural cycles.',
    image: '/Images/brand-grid.png',
  },
  {
    title: 'Transparency & Accountability',
    body: 'What gets measured gets managed. We are committed to transparency, accountability, and evidence-based decision making. By making waste visible through data and reporting, we help turn hidden problems into actionable opportunities.',
    image: '/Images/aerial.png',
  },
  {
    title: 'Practical Solutions',
    body: 'We believe sustainability only creates value when it works in practice. Every site, waste stream, and community is different, which is why we focus on practical, adaptable solutions rather than one-size-fits-all approaches.',
    image: '/Images/hands-compost.png',
  },
  {
    title: 'Resource Recovery',
    body: "Waste is not the end of a material's journey. We believe valuable resources should remain in use for as long as possible. Through composting, circular systems, and innovative infrastructure, we help transform discarded materials into new opportunities.",
    image: '/Images/brand-grid.png',
  },
]

export default function About() {
  return (
    <main>
      <SEO
        title="About Us | The Compost Bank, Phuket"
        description="The Compost Bank was founded by Rae Ann Collier and Tom Gossland to address Phuket's organic waste problem and build the infrastructure needed for a circular economy on the island."
        path="/about"
      />
      {/* Hero */}
      <section data-nav-dark className="relative overflow-hidden bg-forest pt-36 pb-20 sm:pt-44 sm:pb-28 lg:pt-64 lg:pb-56 px-8 sm:px-12 lg:px-16 xl:px-20">

        {/* Atmospheric image — full bleed */}
        <div className="absolute inset-0">
          {/* Base layer — crisp everywhere */}
          <img
            src="/Images/fw.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: '50% center' }}
          />
          {/* Blurred overlay — left side only, fades out before right edge */}
          <img
            src="/Images/fw.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              objectPosition: '50% center',
              filter: 'blur(6px)',
              transform: 'scale(1.05)',
              maskImage: 'linear-gradient(to right, black 0%, black 25%, transparent 60%)',
              WebkitMaskImage: 'linear-gradient(to right, black 0%, black 25%, transparent 60%)',
            }}
          />
          {/* Dark green tint */}
          <div className="absolute inset-0 bg-forest/10" />
          {/* Fade into green from the left */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, rgba(46,58,47,1) 0%, rgba(46,58,47,1) 30%, rgba(46,58,47,0.6) 45%, rgba(46,58,47,0.1) 60%, rgba(46,58,47,0) 100%)',
            }}
          />
        </div>

        {/* Text */}
        <div className="max-w-screen-xl mx-auto relative z-10">
          <p className="text-sand/35 text-[13px] tracking-ultra uppercase font-lato mb-8">About Us</p>
          <h1 className="font-cormorant font-semibold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-sand leading-[1.04] max-w-4xl">
            A practical response to a real problem.
          </h1>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative bg-cream py-24 lg:py-40 px-8 sm:px-12 lg:px-16 xl:px-20 overflow-hidden">
        <div className="max-w-screen-xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <p className="text-olive text-[13px] tracking-ultra uppercase font-lato mb-6">Mission</p>
              <h2 className="font-cormorant font-semibold text-3xl lg:text-4xl xl:text-5xl text-forest leading-[1.08] mb-6">
                To transform organic waste from a disposal problem into a valuable resource.
              </h2>
              <div className="w-8 h-px bg-forest/15 mb-6" />
              <p className="text-charcoal/60 text-sm lg:text-base font-lato leading-relaxed">
                While building the infrastructure needed for a more circular Phuket — one that keeps organic matter in productive use, supports local communities, and reduces the environmental burden of unnecessary waste.
              </p>
            </div>
            <div>
              <p className="text-olive text-[13px] tracking-ultra uppercase font-lato mb-6">Vision</p>
              <h2 className="font-cormorant font-semibold text-3xl lg:text-4xl xl:text-5xl text-forest leading-[1.08] mb-6">
                A Phuket where no organic waste goes to landfill.
              </h2>
              <div className="w-8 h-px bg-forest/15 mb-6" />
              <p className="text-charcoal/60 text-sm lg:text-base font-lato leading-relaxed">
                Where every hotel, restaurant, farm, and community has access to the systems, knowledge, and support they need to close the organic loop — and where the island's organic waste becomes a foundation for food production, clean energy, and environmental restoration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Phuket */}

      <section data-nav-dark className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-stretch">
          <div className="h-56 sm:h-72 lg:h-full overflow-hidden img-zoom order-2 lg:order-1">
            <img
              src="/Images/phuket.jpg"
              alt="Phuket coastline and tropical landscape"
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center 80%' }}
            />
          </div>
          <div className="bg-forest p-10 lg:p-16 xl:p-20 flex flex-col justify-center order-1 lg:order-2">
            <p className="text-sand/35 text-[13px] tracking-ultra uppercase font-lato mb-8">Context</p>
            <h2 className="font-cormorant font-semibold text-3xl lg:text-4xl xl:text-5xl text-sand leading-[1.08] mb-7">
              Why Phuket?
            </h2>
            <div className="w-8 h-px bg-sand/15 mb-7" />
            <div className="space-y-5 text-sand/60 text-sm lg:text-base font-lato leading-relaxed">
              <p>
                Phuket attracts millions of tourists every year, placing immense pressure on an island that was never originally designed to support such a large and growing population. Combined with more than 400,000 residents, this growth generates significant volumes of waste from hotels, restaurants, markets, communities, and agricultural activities. Organic materials are estimated to account for roughly 60% of the island's waste stream, making them one of the greatest opportunities for waste diversion and resource recovery. However, unlocking that opportunity requires more than separating organic waste at the source—it requires the infrastructure needed to collect, process, and recover value from it at scale.
              </p>
              <p>
                The majority of this waste ends up in landfill, where it produces methane, generates leachate, and occupies space that is increasingly difficult to find on an island under intense development pressure.
              </p>
              <p>
                But Phuket also has the right conditions to do something different: a concentration of large hospitality businesses, a growing awareness of environmental responsibility, and a network of farms, gardens, golf courses, resorts, parks, and public green spaces that could benefit from high-quality compost.
              </p>
              <p>
                The Compost Bank was built to connect these conditions by creating the infrastructure needed to divert organic waste from landfill and transform it into valuable resources for the island.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="relative bg-sand-mid py-24 lg:py-40 px-8 sm:px-12 lg:px-16 xl:px-20 overflow-hidden">
        <ContourPattern />
        <div className="max-w-screen-xl mx-auto relative">
          {/* Heading — full width above the grid */}
          <p className="text-olive text-[13px] tracking-ultra uppercase font-lato mb-8">Our Story</p>
          <h2 className="font-cormorant font-semibold text-3xl lg:text-4xl xl:text-5xl text-forest leading-[1.08] mb-7">
            Started by challenging a common assumption.
          </h2>
          <div className="w-8 h-px bg-forest/15 mb-7" />

          {/* Two-column: body text left, image right — both start at the divider line */}
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
            <div>
              <p className="font-cormorant font-semibold text-2xl lg:text-3xl xl:text-4xl text-forest leading-snug mb-8">
                "The most visible waste problem isn't always the biggest one."
              </p>
              <div className="space-y-5 text-charcoal/65 text-sm lg:text-base font-lato leading-relaxed">
                <p>
                  The Compost Bank was founded by Rae Ann Collier and Tom Gossland after they identified a gap in Phuket's waste management infrastructure that few people were talking about.
                </p>
                <p>
                  When Rae Ann began researching waste management on the island, much of the conversation focused on plastic pollution. But the more she looked into Phuket's waste system, the less convinced she became that plastic was the biggest challenge. Recycling networks already existed, collection initiatives were growing, and awareness was high. Yet one waste stream kept appearing in the data again and again: organic waste.
                </p>
                <p>
                  The deeper she dug, the clearer the problem became. Huge volumes of food waste, garden waste, and other organic materials were ending up in landfill every day, not because they had no value, but because the infrastructure needed to recover them simply didn't exist.
                </p>
                <p>
                  Around the same time, Rae Ann met Tom, an engineer with a background in renewable energy systems who shared a strong belief that sustainability should be practical, measurable, and embedded into everyday life. While teaching at an international school in Phuket, Tom looked for opportunities to incorporate sustainability concepts across subjects and inspire students to think critically about the systems that shape our world. Beyond the classroom, he was passionate about developing technology for good and building solutions that create tangible, lasting impact.
                </p>
                <p>
                  What began as a shared interest in sustainability quickly evolved into a shared vision. Combining Rae Ann's experience in resource management and waste systems with Tom's engineering and systems-thinking approach, they saw an opportunity to tackle one of Phuket's most overlooked environmental challenges. Together, they began developing the idea that would become The Compost Bank.
                </p>
                <p>
                  Today, they are working to help Phuket rethink organic waste—not as rubbish to get rid of, but as a resource worth recovering. Their goal is simple: build practical solutions, create the infrastructure that's currently missing, and demonstrate that with the right systems in place, waste can become a valuable resource that benefits businesses, communities, and the environment alike.
                </p>
              </div>
            </div>
            {/* Image */}
            <div className="h-[320px] lg:h-full overflow-hidden">
              <img
                src="/Images/shirts.png"
                alt="The Compost Bank team shirt"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream py-24 lg:py-40 px-8 sm:px-12 lg:px-16 xl:px-20">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-4">
            <h2 className="font-cormorant font-semibold text-4xl lg:text-5xl text-forest max-w-sm leading-[1.06]">
              What guides us.
            </h2>
            <p className="text-charcoal/45 text-sm font-lato leading-relaxed max-w-sm">
              Six principles that shape every decision — from how we design systems to how we work with clients and communities.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {values.map((v) => (
              <div key={v.title} className="group relative overflow-hidden border border-sand/10 p-8 lg:p-10 cursor-default transition-all duration-300 ease-in-out hover:scale-[1.04] hover:z-10 hover:shadow-xl hover:border-sand/20">
                {/* Background layer — blurs on hover, text stays sharp */}
                <div className="absolute inset-0 bg-forest transition-all duration-300 group-hover:blur-sm group-hover:scale-110" />
                {/* Content */}
                <div className="relative z-10">
                  <div className="w-5 h-px bg-olive mb-6 transition-colors duration-300 group-hover:bg-terracotta" />
                  <h3 className="font-cormorant font-bold text-3xl text-sand mb-4 leading-snug">{v.title}</h3>
                  <p className="text-sand/55 text-sm font-lato leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">{v.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section data-nav-dark className="bg-forest py-24 lg:py-36 px-8 sm:px-12 lg:px-16 xl:px-20 text-center">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-sand/30 text-[13px] tracking-ultra uppercase font-lato mb-8">Work With Us</p>
          <h2 className="font-cormorant font-semibold text-4xl lg:text-5xl text-sand leading-[1.06] mb-8 max-w-xl mx-auto">
            Ready to build something together?
          </h2>
          <Link
            to="/contact"
            className="inline-block bg-sand hover:bg-sand/90 text-forest text-[10px] tracking-ultra uppercase font-lato px-12 py-4 transition-colors duration-200"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  )
}
