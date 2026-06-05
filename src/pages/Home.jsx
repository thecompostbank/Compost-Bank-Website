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

const ServiceIcon01 = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="w-5 h-5">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
)

const ServiceIcon02 = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="w-5 h-5">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 8v4l3 3" />
  </svg>
)

const ServiceIcon03 = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="w-5 h-5">
    <rect x="1" y="3" width="15" height="13" rx="1" />
    <path d="M16 8h4l3 3v5h-7V8z" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
)

const ServiceIcon04 = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="w-5 h-5">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
)

const services = [
  {
    number: '01',
    title: 'On-Site Composting Systems',
    description:
      'Custom-designed composting infrastructure for hotels, resorts, and large food producers. Built to match your footprint, capacity, and operational requirements.',
    Icon: ServiceIcon01,
    anchor: 'onsite',
  },
  {
    number: '02',
    title: 'Organic Waste Consultancy',
    description:
      'Comprehensive waste audits, process design, and strategic guidance to help your business reduce organic waste and recover real value from what remains.',
    Icon: ServiceIcon02,
    anchor: 'consultancy',
  },
  {
    number: '03',
    title: 'Centralized Processing & Collection',
    description:
      'For businesses without space for on-site systems. We collect your sorted organic waste and process it at our centralized facility. You sort — we handle the rest.',
    Icon: ServiceIcon03,
    anchor: 'centralized',
  },
  {
    number: '04',
    title: 'Bio-Generator Projects',
    description:
      'Feasibility studies, design, and build for anaerobic digestion and biogas systems that convert organic waste into clean, renewable energy.',
    Icon: ServiceIcon04,
    anchor: 'biogenerator',
  },
]

const pillars = [
  {
    title: 'Reduce Waste',
    body: 'Systematic auditing, training, and process redesign to reduce organic waste at the source before it becomes a cost or a problem.',
  },
  {
    title: 'Recover Value',
    body: 'Transform organic waste streams into premium compost, biogas, and soil amendments — outputs with real market value and environmental benefit.',
  },
  {
    title: 'Support Communities',
    body: "Share knowledge, create skilled employment, and strengthen Phuket's capacity for sustainable waste management at every level.",
  },
  {
    title: 'Regenerate Our Planet',
    body: 'Return organic matter to the soil, sequester carbon, and rebuild the natural cycles that sustain healthy, productive ecosystems.',
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
      <section className="min-h-screen flex flex-col lg:flex-row">
        {/* Left — text */}
        <div className="relative bg-forest flex flex-col justify-center px-8 sm:px-12 lg:px-16 xl:px-20 pt-36 pb-20 lg:py-0 lg:w-[48%] xl:w-[44%]">
          <p className="text-sand/40 text-[9px] tracking-ultra uppercase font-lato mb-10">
            Phuket, Thailand
          </p>

          <h1 className="font-cormorant font-semibold text-5xl sm:text-6xl xl:text-7xl text-sand leading-[1.04] mb-7">
            Turning organic<br />
            waste into<br />
            <em className="italic font-normal text-sand/75">opportunity.</em>
          </h1>

          <div className="w-10 h-px bg-sand/20 mb-7" />

          <p className="text-sand/60 text-sm lg:text-[15px] font-lato leading-relaxed mb-10 max-w-[340px]">
            We help businesses reduce waste, recover value, and contribute to a circular economy through consultancy, infrastructure, and organic waste processing solutions.
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
      <section className="bg-forest py-28 lg:py-44 px-8 sm:px-12 lg:px-16 xl:px-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <ContourPattern opacity="0.035" color="#DCC8A3" />
        </div>
        <div className="max-w-screen-xl mx-auto relative">
          <div className="max-w-5xl">
            <p className="text-sand/30 text-[9px] tracking-ultra uppercase font-lato mb-12">
              Our Approach
            </p>
            <h2 className="font-cormorant font-semibold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-sand leading-[1.04] mb-10">
              Building infrastructure.<br />
              Creating value.<br />
              Restoring balance.
            </h2>
            <div className="w-14 h-px bg-sand/15 mb-8" />
            <p className="text-sand/50 text-sm lg:text-base font-lato leading-relaxed max-w-lg">
              We believe organic waste should be treated as a resource, not a liability. Through practical systems and collaborative partnerships, we are building Phuket's circular economy — one business at a time.
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
              <p className="text-olive text-[9px] tracking-ultra uppercase font-lato mb-8">
                Our Mission
              </p>
              <h2 className="font-cormorant font-semibold text-4xl lg:text-5xl xl:text-6xl text-forest leading-[1.08] mb-7">
                To transform organic waste from a disposal problem into a valuable resource.
              </h2>
              <div className="w-10 h-px bg-forest/20 mb-7" />
              <p className="text-charcoal/60 text-sm lg:text-base font-lato leading-relaxed">
                While building the infrastructure needed for a more circular Phuket.
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

      {/* ── SECTION 4: SERVICES ─────────────────────────────────────────── */}
      <section className="py-24 lg:py-40 px-8 sm:px-12 lg:px-16 xl:px-20 bg-cream">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
            <h2 className="font-cormorant font-semibold text-4xl lg:text-5xl text-forest">
              Our Services
            </h2>
            <Link
              to="/services"
              className="text-[9.5px] font-lato tracking-ultra uppercase text-olive border-b border-olive/30 pb-0.5 hover:border-olive transition-colors self-start sm:self-auto whitespace-nowrap"
            >
              View All Services ↗
            </Link>
          </div>

          <div className="divide-y divide-forest/8">
            {services.map((s) => (
              <Link
                key={s.number}
                to={`/services#${s.anchor}`}
                className="group flex items-start gap-6 lg:gap-12 py-7 -mx-4 px-4 hover:bg-forest/[0.025] transition-colors duration-300"
              >
                <span className="text-[9px] font-lato tracking-wide text-olive/50 pt-1.5 flex-shrink-0 w-5">
                  {s.number}
                </span>
                <div className="text-olive/50 group-hover:text-olive transition-colors pt-1 flex-shrink-0">
                  <s.Icon />
                </div>
                <div className="flex-1 flex flex-col lg:flex-row lg:items-start lg:gap-10">
                  <h3 className="font-cormorant text-2xl lg:text-[26px] text-forest group-hover:text-olive transition-colors mb-2 lg:mb-0 lg:w-64 xl:w-72 flex-shrink-0 leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-charcoal/55 text-sm font-lato leading-relaxed flex-1">
                    {s.description}
                  </p>
                </div>
                <span className="hidden lg:block text-forest/20 group-hover:text-olive/60 transition-colors flex-shrink-0 pt-1 text-lg">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: IMAGE GRID ───────────────────────────────────────── */}
      <section className="bg-charcoal">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-charcoal/60">
          {/* Large image */}
          <div className="lg:col-span-2 h-72 sm:h-96 lg:h-[560px] img-zoom overflow-hidden">
            <img
              src="/images/brand-grid.png"
              alt="The Compost Bank — operations, team, and product"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Editorial text panel */}
          <div className="flex flex-col justify-between bg-charcoal px-10 py-12 lg:py-14">
            <div>
              <p className="text-sand/25 text-[9px] tracking-ultra uppercase font-lato mb-8">
                The Compost Bank
              </p>
              <blockquote className="font-cormorant text-[22px] lg:text-2xl text-sand leading-snug italic mb-10">
                "We believe organic waste should be treated as a resource,<br className="hidden xl:block" />
                not a liability."
              </blockquote>
              <div className="w-8 h-px bg-sand/15 mb-10" />
            </div>
            <div className="space-y-8">
              <div>
                <p className="font-cormorant text-6xl text-sand font-light leading-none mb-2">50+</p>
                <p className="text-sand/40 text-[10px] font-lato tracking-widest uppercase">Partner Businesses</p>
              </div>
              <div className="w-6 h-px bg-sand/15" />
              <div>
                <p className="font-cormorant text-4xl text-sand/60 font-light leading-none mb-2 italic">
                  Circular Economy
                </p>
                <p className="text-sand/40 text-[10px] font-lato tracking-widest uppercase">Infrastructure for Phuket</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: VALUE PILLARS ────────────────────────────────────── */}
      <section className="py-24 lg:py-40 px-8 sm:px-12 lg:px-16 xl:px-20 bg-cream">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-cormorant font-semibold text-4xl lg:text-5xl xl:text-6xl text-forest max-w-2xl leading-[1.08] mb-20">
            A smarter way to manage waste.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-forest/8">
            {pillars.map((p) => (
              <div key={p.title} className="bg-cream p-8 lg:p-10 xl:p-12">
                <div className="w-5 h-px bg-olive mb-7" />
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

      {/* ── SECTION 8: IMPACT ───────────────────────────────────────────── */}
      <section className="bg-charcoal py-24 lg:py-40 px-8 sm:px-12 lg:px-16 xl:px-20">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-sand/30 text-[9px] tracking-ultra uppercase font-lato mb-16">
            Our Impact
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-sand/5">
            {metrics.map((m) => (
              <div key={m.label} className="bg-charcoal px-6 py-10 lg:px-8 lg:py-12">
                <p className="font-cormorant font-light text-5xl lg:text-6xl text-sand leading-none mb-1">
                  {m.number}
                  {m.unit && <span className="text-xl ml-1.5 text-sand/40 font-normal">{m.unit}</span>}
                </p>
                <div className="w-5 h-px bg-olive/50 my-4" />
                <p className="text-sand/40 text-[10px] font-lato tracking-wider leading-relaxed">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 9: CTA ──────────────────────────────────────────────── */}
      <section className="relative bg-sand-mid py-32 lg:py-52 px-8 sm:px-12 lg:px-16 xl:px-20 overflow-hidden">
        <ContourPattern />
        <div className="max-w-screen-xl mx-auto relative text-center">
          <p className="text-olive text-[9px] tracking-ultra uppercase font-lato mb-8">
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
