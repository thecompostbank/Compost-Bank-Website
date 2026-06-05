import { Link } from 'react-router-dom'

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
    title: 'Practical Action',
    body: 'We prioritise what works over what sounds good. Every recommendation we make is grounded in operational reality — systems that can actually be built, run, and maintained by real teams in real conditions.',
  },
  {
    title: 'Transparency',
    body: 'We are honest about what we know and what we do not. We share data, document outcomes, and report on both successes and challenges — because trust is built on honesty, not on marketing.',
  },
  {
    title: 'Education',
    body: 'We build capability wherever we work. Training staff, sharing knowledge, and leaving businesses better equipped to manage waste long after our direct involvement has ended.',
  },
  {
    title: 'Circularity',
    body: 'Waste is not an endpoint — it is a resource in the wrong place. Everything we do is oriented around closing the loop: keeping organic matter in productive use rather than sending it to landfill.',
  },
  {
    title: 'Collaboration',
    body: "Phuket's waste challenge is too large for any one organisation. We work with businesses, communities, government bodies, and other organisations to build systems that are bigger than ourselves.",
  },
  {
    title: 'Long-Term Thinking',
    body: 'We build for durability, not for demonstration. The systems we design and install are meant to function for years — and the relationships we build are designed to last just as long.',
  },
]

export default function About() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-forest pt-40 pb-24 lg:pt-52 lg:pb-32 px-8 sm:px-12 lg:px-16 xl:px-20">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-sand/35 text-[9px] tracking-ultra uppercase font-lato mb-8">About Us</p>
          <h1 className="font-cormorant font-semibold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-sand leading-[1.04] max-w-4xl">
            A practical response to a real problem.
          </h1>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-cream py-24 lg:py-40 px-8 sm:px-12 lg:px-16 xl:px-20">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <p className="text-olive text-[9px] tracking-ultra uppercase font-lato mb-6">Mission</p>
              <h2 className="font-cormorant font-semibold text-3xl lg:text-4xl xl:text-5xl text-forest leading-[1.08] mb-6">
                To transform organic waste from a disposal problem into a valuable resource.
              </h2>
              <div className="w-8 h-px bg-forest/15 mb-6" />
              <p className="text-charcoal/60 text-sm lg:text-base font-lato leading-relaxed">
                While building the infrastructure needed for a more circular Phuket — one that keeps organic matter in productive use, supports local communities, and reduces the environmental burden of unnecessary waste.
              </p>
            </div>
            <div>
              <p className="text-olive text-[9px] tracking-ultra uppercase font-lato mb-6">Vision</p>
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
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="h-64 sm:h-96 lg:h-auto overflow-hidden img-zoom order-2 lg:order-1">
            <img
              src="/images/aerial.png"
              alt="Phuket tropical landscape and composting infrastructure"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-forest p-10 lg:p-16 xl:p-20 flex flex-col justify-center order-1 lg:order-2">
            <p className="text-sand/35 text-[9px] tracking-ultra uppercase font-lato mb-8">Context</p>
            <h2 className="font-cormorant font-semibold text-3xl lg:text-4xl xl:text-5xl text-sand leading-[1.08] mb-7">
              Why Phuket?
            </h2>
            <div className="w-8 h-px bg-sand/15 mb-7" />
            <div className="space-y-5 text-sand/60 text-sm font-lato leading-relaxed">
              <p>
                Phuket generates enormous volumes of organic waste. Hotels, restaurants, markets, and a resident population of over 400,000 people produce food waste, garden waste, and agricultural residue at a scale that overwhelms existing infrastructure.
              </p>
              <p>
                The majority of this waste ends up in landfill — where it produces methane, leaches into groundwater, and occupies space that is increasingly difficult to find on an island under intense development pressure.
              </p>
              <p>
                But Phuket also has the right conditions to do something different. A concentration of large hospitality businesses, a growing awareness of environmental responsibility, and a network of farms and gardens that could benefit from high-quality compost.
              </p>
              <p>
                The Compost Bank was built to connect those conditions — and to build the infrastructure that makes a circular organic economy possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="relative bg-sand-mid py-24 lg:py-40 px-8 sm:px-12 lg:px-16 xl:px-20 overflow-hidden">
        <ContourPattern />
        <div className="max-w-screen-xl mx-auto relative">
          <div className="max-w-3xl">
            <p className="text-olive text-[9px] tracking-ultra uppercase font-lato mb-8">Our Story</p>
            <h2 className="font-cormorant font-semibold text-3xl lg:text-4xl xl:text-5xl text-forest leading-[1.08] mb-7">
              Founded on a simple observation.
            </h2>
            <div className="w-8 h-px bg-forest/15 mb-7" />
            <div className="space-y-5 text-charcoal/65 text-sm lg:text-base font-lato leading-relaxed">
              <p>
                [Founder story to be added — a personal account of the moment or journey that led to founding The Compost Bank. The problem observed, the decision to act, and the values that have guided the work since.]
              </p>
              <p className="italic text-charcoal/45">
                — Placeholder for founder biography and founding narrative.
              </p>
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-forest/8">
            {values.map((v) => (
              <div key={v.title} className="bg-cream p-8 lg:p-10">
                <div className="w-5 h-px bg-olive mb-6" />
                <h3 className="font-cormorant text-2xl text-forest mb-4 leading-snug">{v.title}</h3>
                <p className="text-charcoal/55 text-sm font-lato leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand image */}
      <section className="h-72 sm:h-96 lg:h-[500px] overflow-hidden img-zoom">
        <img
          src="/images/brand-grid.png"
          alt="The Compost Bank team and operations"
          className="w-full h-full object-cover"
        />
      </section>

      {/* CTA */}
      <section className="bg-forest py-24 lg:py-36 px-8 sm:px-12 lg:px-16 xl:px-20 text-center">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-sand/30 text-[9px] tracking-ultra uppercase font-lato mb-8">Work With Us</p>
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
