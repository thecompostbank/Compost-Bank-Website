import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

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
      <SEO
        title="Wealth in Waste | Phuket Composting &amp; Organic Waste Solutions"
        description="The Compost Bank transforms organic waste into valuable resources across Phuket. Composting systems, waste management consultancy, and circular economy infrastructure for hotels, restaurants, and businesses."
        path="/"
      />

      {/* ── SECTION 1: HERO ─────────────────────────────────────────────── */}
      <section data-nav-dark className="min-h-screen relative flex items-center overflow-hidden">
        {/* Hero with gradient overlay — solid green left, crisp photo right */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(46,58,47,0.96) 0%, rgba(46,58,47,0.88) 25%, rgba(46,58,47,0.55) 45%, rgba(46,58,47,0.15) 65%, rgba(46,58,47,0) 100%), url('/Images/home.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        />

        {/* Text content */}
        <div className="relative z-10 px-8 sm:px-12 lg:px-16 xl:px-20 pt-28 pb-16 sm:pt-32 lg:py-0 w-full max-w-2xl">
          <p className="text-sand/60 text-[13px] tracking-ultra uppercase font-lato mb-10 [text-shadow:0_1px_12px_rgba(0,0,0,0.5)]">
            Phuket, Thailand
          </p>

          <h1 className="font-cormorant font-bold text-5xl sm:text-6xl xl:text-7xl text-sand leading-[1.04] mb-7 [text-shadow:0_2px_24px_rgba(0,0,0,0.55)]">
            Turning organic<br />
            waste into<br />
            <em className="italic font-semibold text-sand/90">opportunity.</em>
          </h1>

          <div className="w-10 h-px bg-sand/30 mb-7" />

          <p className="text-sand/80 text-sm lg:text-[15px] font-lato leading-relaxed mb-10 max-w-[340px] [text-shadow:0_1px_12px_rgba(0,0,0,0.5)]">
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
        </div>

      </section>

      {/* ── SECTION 2: BRAND STATEMENT ──────────────────────────────────── */}
      <section data-nav-dark className="bg-forest py-28 lg:py-44 px-8 sm:px-12 lg:px-16 xl:px-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <ContourPattern opacity="0.035" color="#DCC8A3" />
        </div>
        <div className="max-w-screen-xl mx-auto relative">
          <div className="max-w-5xl">
            <p className="text-sand/30 text-[13px] tracking-ultra uppercase font-lato font-bold mb-12">
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
      <section className="relative min-h-[560px] lg:min-h-[640px] overflow-hidden flex items-center">
        {/* Full-width background image */}
        <img
          src="/Images/our-mission.png"
          alt="Young plant emerging from rich compost soil"
          className="absolute inset-0 w-full h-full object-cover object-[60%_center]"
        />
        {/* Progressive blur — strong on left (text area), fades to nothing on right (plant stays sharp) */}
        <div
          className="absolute inset-0"
          style={{
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
            maskImage: 'linear-gradient(to right, white 0%, white 30%, rgba(255,255,255,0.6) 48%, transparent 68%)',
            WebkitMaskImage: 'linear-gradient(to right, white 0%, white 30%, rgba(255,255,255,0.6) 48%, transparent 68%)',
          }}
        />
        {/* Subtle warm overlay on text side for contrast */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(245,240,232,0.72) 0%, rgba(245,240,232,0.45) 35%, rgba(245,240,232,0.1) 58%, transparent 72%)',
          }}
        />
        {/* Text content */}
        <div className="relative z-10 py-24 lg:py-40 px-8 sm:px-12 lg:px-16 xl:px-20 max-w-xl">
          <p className="text-olive text-[13px] tracking-ultra uppercase font-lato font-bold mb-8">
            Our Mission
          </p>
          <h2 className="font-cormorant font-semibold text-4xl lg:text-5xl xl:text-6xl text-forest leading-[1.08] mb-7">
            To build the infrastructure needed for a circular Phuket.
          </h2>
          <div className="w-10 h-px bg-forest/20 mb-7" />
          <p className="text-charcoal/70 text-sm lg:text-base font-lato leading-relaxed">
            Creating practical pathways for organic waste to be recovered, processed, and returned to the earth as a valuable resource.
          </p>
        </div>
      </section>


      {/* ── SECTION 5: LOOKING FOR A SOLUTION ──────────────────────────── */}
      <section data-nav-dark className="bg-charcoal">
        <div className="grid lg:grid-cols-[3fr_2fr] items-stretch">
          <div className="pt-24 pb-16 lg:pt-40 lg:pb-24 px-8 sm:px-12 lg:pl-40 lg:pr-16 xl:pl-52 xl:pr-20">
            <h2 className="font-cormorant font-semibold text-4xl lg:text-5xl text-sand leading-[1.06] mb-8">
              Looking for a Solution?
            </h2>
            <div className="divide-y divide-sand/10">
              <div className="py-5">
                <p className="text-sand/60 text-sm lg:text-base font-lato leading-relaxed mb-2">
                  Do you generate organic waste at your business?
                </p>
                <Link to="/services/on-site-composting" className="flex items-center gap-3 text-sand font-lato text-sm lg:text-base group hover:opacity-70 transition-opacity">
                  <span className="text-terracotta">→</span>
                  <span className="border-b border-sand/20 group-hover:border-sand/50 transition-colors pb-px">Explore on-site composting solutions</span>
                </Link>
              </div>
              <div className="py-5">
                <p className="text-sand/60 text-sm lg:text-base font-lato leading-relaxed mb-2">
                  Need help making waste management work in practice?
                </p>
                <Link to="/services/organic-waste-management" className="flex items-center gap-3 text-sand font-lato text-sm lg:text-base group hover:opacity-70 transition-opacity">
                  <span className="text-terracotta">→</span>
                  <span className="border-b border-sand/20 group-hover:border-sand/50 transition-colors pb-px">Improve processes, train teams, and build practical systems that reduce waste and improve performance</span>
                </Link>
              </div>
              <div className="py-5">
                <p className="text-sand/60 text-sm lg:text-base font-lato leading-relaxed mb-2">
                  Are you planning a new development in Phuket that will generate organic waste?
                </p>
                <Link to="/services/bio-generator-projects" className="flex items-center gap-3 text-sand font-lato text-sm lg:text-base group hover:opacity-70 transition-opacity">
                  <span className="text-terracotta">→</span>
                  <span className="border-b border-sand/20 group-hover:border-sand/50 transition-colors pb-px">Design organic waste infrastructure before construction begins</span>
                </Link>
              </div>
              <div className="py-5">
                <p className="text-sand/60 text-sm lg:text-base font-lato leading-relaxed mb-2">
                  Interested in future collection services?
                </p>
                <Link to="/services/centralized-processing" className="flex items-center gap-3 text-sand font-lato text-sm lg:text-base group hover:opacity-70 transition-opacity">
                  <span className="text-terracotta">→</span>
                  <span className="border-b border-sand/20 group-hover:border-sand/50 transition-colors pb-px">Register your interest in Phuket's future organic waste network</span>
                </Link>
              </div>
            </div>
          </div>
          {/* Map image */}
          <div className="relative flex items-center justify-center h-full pl-0 pr-8 lg:pr-12 py-16 lg:py-24">
            <img
              src="/Images/map.png"
              alt="Phuket island map with collection network"
              className="w-full h-full object-contain opacity-90"
            />
            {/* Fade left edge into charcoal */}
            <div className="absolute inset-y-0 left-0 w-24 pointer-events-none" style={{ background: 'linear-gradient(90deg, #1F1F1F 0%, transparent 100%)' }} />
            {/* Fade all other edges */}
            <div className="absolute inset-x-0 top-0 h-16 pointer-events-none" style={{ background: 'linear-gradient(180deg, #1F1F1F 0%, transparent 100%)' }} />
            <div className="absolute inset-x-0 bottom-0 h-16 pointer-events-none" style={{ background: 'linear-gradient(0deg, #1F1F1F 0%, transparent 100%)' }} />
            <div className="absolute inset-y-0 right-0 w-16 pointer-events-none" style={{ background: 'linear-gradient(270deg, #1F1F1F 0%, transparent 100%)' }} />
          </div>
        </div>
      </section>

      {/* ── SECTION 6: VALUE PILLARS ────────────────────────────────────── */}
      <section className="py-24 lg:py-40 px-8 sm:px-12 lg:px-16 xl:px-20 bg-cream">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-cormorant font-semibold text-4xl lg:text-5xl xl:text-6xl text-forest leading-[1.08] mb-20">
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



      {/* ── SECTION 9: CTA ──────────────────────────────────────────────── */}
      <section className="relative bg-sand-mid py-32 lg:py-52 px-8 sm:px-12 lg:px-16 xl:px-20 overflow-hidden">
        <ContourPattern />
        <div className="max-w-screen-xl mx-auto relative text-center">
          <p className="text-olive text-[13px] tracking-ultra uppercase font-lato mb-8">
            Get Started
          </p>
          <h2 className="font-cormorant font-semibold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-forest leading-[1.06] mb-10 max-w-3xl mx-auto">
            Ready to find wealth in your waste?
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
