import { Link } from 'react-router-dom'

const ContourPattern = ({ opacity = '0.06', color = '#2E3A2F' }) => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none"
    viewBox="0 0 1440 700"
    preserveAspectRatio="xMidYMid slice"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ opacity }}
  >
    <g stroke={color} strokeWidth="1">
      {[60, 110, 160, 210, 260, 310, 360, 410, 460, 510, 560, 610].map((y, i) => (
        <path
          key={y}
          d={`M-200,${y} C${150 + i * 20},${y - 12} ${400 - i * 10},${y + 15} ${700 + i * 5},${y - 8} C${1000 - i * 8},${y + 10} ${1280 + i * 6},${y - 5} 1640,${y}`}
        />
      ))}
    </g>
  </svg>
)


const pillars = [
  {
    title: 'Reduce Waste',
    body: 'Systematic auditing, training, and process redesign to reduce organic waste at the source before it becomes a cost or a problem.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <line x1="12" y1="3" x2="12" y2="21" />
        <polyline points="6 15 12 21 18 15" />
      </svg>
    ),
  },
  {
    title: 'Recover Value',
    body: 'Transform organic waste streams into premium compost, biogas, and soil amendments — outputs with real market value and environmental benefit.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 22c0 0-8-4-8-11a8 8 0 0116 0c0 7-8 11-8 11z" />
        <path d="M12 8v8" />
        <path d="M14.5 10a2.5 2.5 0 00-5 0c0 1.5 1 2 2.5 2.5S15 13 15 14.5a2.5 2.5 0 01-5 0" />
      </svg>
    ),
  },
  {
    title: 'Support Communities',
    body: "Share knowledge, create skilled employment, and strengthen Phuket's capacity for sustainable waste management at every level.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    title: 'Regenerate Our Planet',
    body: 'Return organic matter to the soil, sequester carbon, and rebuild the natural cycles that sustain healthy, productive ecosystems.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <polyline points="23 4 23 10 17 10" />
        <polyline points="1 20 1 14 7 14" />
        <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
      </svg>
    ),
  },
]

const metrics = [
  { number: '50+', label: 'Partner Businesses' },
  { number: '—', unit: 'Tons', label: 'Organic Waste Diverted' },
  { number: '—', unit: 'Tons', label: 'Compost Produced' },
  { number: '—', unit: 'Tons', label: 'CO₂ Emissions Avoided' },
]

export default function Home() {
  return (
    <main>

      {/* ── SECTION 1: HERO ─────────────────────────────────────────────── */}
      <section data-nav-dark className="min-h-screen flex flex-col lg:flex-row">
        {/* Left — text */}
        <div className="relative bg-forest flex flex-col justify-center px-8 sm:px-12 lg:px-16 xl:px-20 pt-36 pb-20 lg:py-0 lg:w-[48%] xl:w-[44%]">
          <p className="text-sand/40 text-[13px] tracking-ultra uppercase font-lato mb-10">
            Phuket, Thailand
          </p>

          <h1 className="font-cormorant font-semibold text-5xl sm:text-6xl xl:text-7xl text-sand leading-[1.04] mb-7">
            Turning organic<br />
            waste into<br />
            <em className="italic font-normal text-sand/75">opportunity.</em>
          </h1>

          <div className="w-10 h-px bg-sand/20 mb-7" />

          <p className="text-sand/60 text-sm lg:text-[15px] font-lato leading-relaxed mb-10 max-w-[340px]">
            The Compost Bank helps businesses, new developments, and communities transform organic waste into valuable resources through practical solutions, infrastructure, and education—helping reduce environmental impact while supporting a more circular economy.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/services"
              className="bg-olive hover:bg-olive/90 text-sand text-[10px] tracking-ultra uppercase font-lato px-8 py-3.5 text-center transition-colors duration-200"
            >
              Our Services
            </Link>
            <Link
              to="/contact"
              className="border border-sand/25 hover:border-sand/50 text-sand text-[10px] tracking-ultra uppercase font-lato px-8 py-3.5 text-center transition-colors duration-200"
            >
              Book a Consultation
            </Link>
          </div>

          <div className="absolute bottom-8 left-8 sm:left-12 lg:left-16 xl:left-20">
            <p className="text-sand/18 text-[8px] tracking-ultra uppercase font-lato">
              Wealth in Waste
            </p>
          </div>
        </div>

        {/* Right — image */}
        <div className="h-72 sm:h-96 lg:h-auto lg:flex-1 relative overflow-hidden">
          <img
            src="/images/aerial.png"
            alt="Compost Bank composting facility, Phuket"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-forest/30 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </div>
      </section>

      {/* ── SECTION 2: BRAND STATEMENT ──────────────────────────────────── */}
      <section data-nav-dark className="bg-forest py-28 lg:py-44 px-8 sm:px-12 lg:px-16 xl:px-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <ContourPattern opacity="0.035" color="#DCC8A3" />
        </div>
        <div className="max-w-screen-xl mx-auto relative">
          <div className="max-w-5xl">
            <p className="text-sand/30 text-[13px] tracking-ultra uppercase font-lato mb-12">
              Our Approach
            </p>
            <h2 className="font-cormorant font-semibold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-sand leading-[1.04] mb-10">
              Building infrastructure.<br />
              Creating value.<br />
              Restoring balance.
            </h2>
            <div className="w-14 h-px bg-sand/15 mb-8" />
            <p className="text-sand/50 text-sm lg:text-base font-lato leading-relaxed max-w-lg">
              We believe waste should create value, not problems. Organic waste doesn't belong in landfill. By building practical systems and working closely with our partners, we keep valuable nutrients in circulation—refeeding the earth and restoring balance to the systems that sustain us.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: MISSION ──────────────────────────────────────────── */}
      <section className="relative bg-sand-mid py-24 lg:py-40 px-8 sm:px-12 lg:px-16 xl:px-20 overflow-hidden">
        <ContourPattern />
        <div className="max-w-screen-xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <p className="text-olive text-[13px] tracking-ultra uppercase font-lato mb-8">
                Our Mission
              </p>
              <h2 className="font-cormorant font-semibold text-4xl lg:text-5xl xl:text-6xl text-forest leading-[1.08] mb-7">
                To build the infrastructure needed for a circular Phuket.
              </h2>
              <div className="w-10 h-px bg-forest/20 mb-7" />
              <p className="text-charcoal/60 text-sm lg:text-base font-lato leading-relaxed">
                Creating practical pathways for organic waste to be recovered, processed, and returned to the earth as a valuable resource.
              </p>
            </div>
            <div className="relative h-72 sm:h-96 lg:h-[520px] overflow-hidden img-zoom">
              <img
                src="/images/hands-compost.png"
                alt="Hands holding rich compost"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>


      {/* ── SECTION 5: LOOKING FOR A SOLUTION ──────────────────────────── */}
      <section data-nav-dark className="bg-charcoal">
        <div className="grid lg:grid-cols-2">
          {/* Text column */}
          <div className="py-24 lg:py-40 px-8 sm:px-12 lg:px-16 xl:px-20">
            <h2 className="font-cormorant font-semibold text-4xl lg:text-5xl xl:text-6xl text-sand leading-[1.06] mb-16">
              Looking for a Solution?
            </h2>
            <div className="divide-y divide-sand/10">
              <div className="py-8 lg:py-10">
                <p className="text-sand/60 text-base font-lato leading-relaxed mb-4">
                  Generate organic waste at your business?
                </p>
                <Link to="/services/on-site-composting" className="flex items-center gap-3 text-sand font-lato text-base group hover:opacity-70 transition-opacity">
                  <span className="text-terracotta">→</span>
                  <span className="border-b border-sand/20 group-hover:border-sand/50 transition-colors pb-px">Explore on-site composting solutions</span>
                </Link>
              </div>
              <div className="py-8 lg:py-10">
                <p className="text-sand/60 text-base font-lato leading-relaxed mb-4">
                  Need help making waste management work in practice?
                </p>
                <Link to="/services/organic-waste-management" className="flex items-center gap-3 text-sand font-lato text-base group hover:opacity-70 transition-opacity">
                  <span className="text-terracotta">→</span>
                  <span className="border-b border-sand/20 group-hover:border-sand/50 transition-colors pb-px">Improve processes, train teams, and build practical systems that reduce waste and improve performance</span>
                </Link>
              </div>
              <div className="py-8 lg:py-10">
                <p className="text-sand/60 text-base font-lato leading-relaxed mb-4">
                  Planning a new development in Phuket?
                </p>
                <Link to="/services/bio-generator-projects" className="flex items-center gap-3 text-sand font-lato text-base group hover:opacity-70 transition-opacity">
                  <span className="text-terracotta">→</span>
                  <span className="border-b border-sand/20 group-hover:border-sand/50 transition-colors pb-px">Design organic waste infrastructure before construction begins</span>
                </Link>
              </div>
              <div className="py-8 lg:py-10">
                <p className="text-sand/60 text-base font-lato leading-relaxed mb-4">
                  Interested in future collection services?
                </p>
                <Link to="/services/centralized-processing" className="flex items-center gap-3 text-sand font-lato text-base group hover:opacity-70 transition-opacity">
                  <span className="text-terracotta">→</span>
                  <span className="border-b border-sand/20 group-hover:border-sand/50 transition-colors pb-px">Register your interest in Phuket's future organic waste network</span>
                </Link>
              </div>
            </div>
          </div>
          {/* Image column — replace src with your image */}
          <div className="h-72 lg:h-auto overflow-hidden">
            <img
              src="/images/hands-compost.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── SECTION 6: VALUE PILLARS ────────────────────────────────────── */}
      <section className="py-24 lg:py-40 px-8 sm:px-12 lg:px-16 xl:px-20 bg-cream">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-cormorant font-semibold text-4xl lg:text-5xl xl:text-6xl text-forest whitespace-nowrap leading-[1.08] mb-20">
            A smarter way to manage waste.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-forest/8">
            {pillars.map((p) => (
              <div key={p.title} className="bg-cream p-8 lg:p-10 xl:p-12">
                <div className="text-olive mb-6">{p.icon}</div>
                <h3 className="font-cormorant text-2xl text-forest mb-4 leading-snug">
                  {p.title}
                </h3>
                <p className="text-charcoal/55 text-sm font-lato leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: DUAL TRACK ───────────────────────────────────────── */}
      <section className="relative bg-sand-mid py-24 lg:py-44 px-8 sm:px-12 lg:px-16 xl:px-20 overflow-hidden">
        <ContourPattern />
        <div className="max-w-screen-xl mx-auto relative">
          <div className="text-center mb-20">
            <h2 className="font-cormorant font-semibold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-forest leading-[1.06]">
              Two pathways.<br />
              <em className="italic font-normal">One circular future.</em>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-px bg-forest/12">
            {/* Track 1 */}
            <div className="bg-sand-mid p-10 lg:p-14 xl:p-16">
              <div className="flex items-center gap-4 mb-10">
                <span className="text-[9px] font-lato tracking-ultra uppercase text-olive/50 flex-shrink-0">Track One</span>
                <div className="flex-1 h-px bg-forest/12" />
              </div>
              <h3 className="font-cormorant font-semibold text-3xl lg:text-4xl text-forest mb-5 leading-snug">
                On-Site Systems
              </h3>
              <p className="text-charcoal/60 text-sm font-lato leading-relaxed mb-6">
                For businesses with space and resources to manage organic waste on-site. We design, build, and support you in operating a composting system that fits your exact operation.
              </p>
              <p className="text-forest/40 text-xs font-lato leading-relaxed italic mb-10">
                Hotels · Resorts · Large Restaurants · Farms · New Developments
              </p>
              <Link
                to="/services#onsite"
                className="inline-block text-[9.5px] font-lato tracking-ultra uppercase border border-forest/30 text-forest px-8 py-3.5 hover:bg-forest hover:text-sand hover:border-forest transition-all duration-200"
              >
                Learn More
              </Link>
            </div>

            {/* Track 2 */}
            <div className="bg-forest p-10 lg:p-14 xl:p-16">
              <div className="flex items-center gap-4 mb-10">
                <span className="text-[9px] font-lato tracking-ultra uppercase text-sand/35 flex-shrink-0">Track Two</span>
                <div className="flex-1 h-px bg-sand/12" />
              </div>
              <h3 className="font-cormorant font-semibold text-3xl lg:text-4xl text-sand mb-5 leading-snug">
                Centralized Processing
              </h3>
              <p className="text-sand/60 text-sm font-lato leading-relaxed mb-6">
                For businesses that cannot build their own systems. We collect your sorted organic waste and process it at our centralized facility — giving you the environmental credentials without the operational complexity.
              </p>
              <p className="font-cormorant text-xl lg:text-2xl text-sand/50 italic mb-10">
                You sort. We handle the rest.
              </p>
              <Link
                to="/services#centralized"
                className="inline-block text-[9.5px] font-lato tracking-ultra uppercase border border-sand/25 text-sand px-8 py-3.5 hover:bg-sand hover:text-forest transition-all duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* ── SECTION 9: CTA ──────────────────────────────────────────────── */}
      <section className="relative bg-sand-mid py-32 lg:py-52 px-8 sm:px-12 lg:px-16 xl:px-20 overflow-hidden">
        <ContourPattern />
        <div className="max-w-screen-xl mx-auto relative text-center">
          <p className="text-olive text-[13px] tracking-ultra uppercase font-lato mb-8">
            Get Started
          </p>
          <h2 className="font-cormorant font-semibold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-forest leading-[1.06] mb-10 max-w-3xl mx-auto">
            Ready to turn your organic waste into opportunity?
          </h2>
          <div className="w-10 h-px bg-forest/18 mx-auto mb-10" />
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
