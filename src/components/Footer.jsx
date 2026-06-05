import { Link } from 'react-router-dom'

const LogoMark = ({ className = '' }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="50" cy="50" r="46.5" stroke="currentColor" strokeWidth="2.5" />
    <path d="M26,56 C21,43 26,27 40,20 C55,12 73,19 80,36 C86,51 81,69 68,77 C55,85 37,81 29,69 C26,64 26,60 26,56Z" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M34,53 C30,43 34,30 45,25 C57,19 71,25 76,38 C80,50 76,64 66,70 C56,76 41,72 36,61 C34,57 34,55 34,53Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M43,51 C40,44 43,35 51,32 C59,28 68,33 71,42 C74,51 70,61 63,65 C56,69 47,65 44,57 C43,54 43,52 43,51Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M52,50 C50,46 51,41 55,39 C59,37 63,40 64,45 C65,50 63,55 59,57 C55,59 51,56 52,52 C52,51 52,50 52,50Z" stroke="currentColor" strokeWidth="1" fill="none" />
  </svg>
)

export default function Footer() {
  return (
    <footer className="bg-forest text-sand">
      {/* Main footer content */}
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-sand/10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <LogoMark className="w-10 h-10 text-sand" />
              <div>
                <p className="text-[10px] font-lato tracking-ultra uppercase font-bold block mb-[3px]">The Compost Bank</p>
                <p className="text-[8.5px] font-lato tracking-wide2 uppercase text-terracotta block">Wealth in Waste</p>
              </div>
            </div>
            <p className="font-cormorant text-xl text-sand/70 leading-snug max-w-xs mb-8 italic">
              Building infrastructure.<br />
              Creating value.<br />
              Restoring balance.
            </p>
            <p className="text-sand/40 text-xs font-lato leading-relaxed max-w-xs">
              Transforming organic waste from a disposal problem into a valuable resource while building the infrastructure needed for a more circular Phuket.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[9px] font-lato tracking-ultra uppercase text-sand/35 mb-6">Navigate</p>
            <nav className="flex flex-col gap-3.5">
              {[
                ['Services', '/services'],
                ['How It Works', '/how-it-works'],
                ['Projects', '/projects'],
                ['About', '/about'],
                ['Contact', '/contact'],
              ].map(([label, path]) => (
                <Link
                  key={path}
                  to={path}
                  className="text-[11px] font-lato tracking-widest uppercase text-sand/60 hover:text-sand transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[9px] font-lato tracking-ultra uppercase text-sand/35 mb-6">Contact</p>
            <div className="space-y-4">
              <div>
                <p className="text-[9px] font-lato tracking-widest uppercase text-sand/30 mb-1">Location</p>
                <p className="text-[11px] font-lato text-sand/60 leading-relaxed">Phuket, Thailand</p>
              </div>
              <div>
                <p className="text-[9px] font-lato tracking-widest uppercase text-sand/30 mb-1">Enquiries</p>
                <a href="mailto:hello@thecompostbank.com" className="text-[11px] font-lato text-sand/60 hover:text-sand transition-colors">
                  hello@thecompostbank.com
                </a>
              </div>
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-block text-[9.5px] font-lato tracking-ultra uppercase border border-sand/20 text-sand/60 px-6 py-2.5 hover:bg-sand/10 hover:text-sand hover:border-sand/40 transition-all"
                >
                  Book a Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[10px] font-lato text-sand/30 tracking-wide">
            © {new Date().getFullYear()} The Compost Bank. All rights reserved.
          </p>
          <p className="text-[10px] font-lato text-sand/20 tracking-wide">
            Phuket, Thailand · Building a Circular Economy
          </p>
        </div>
      </div>
    </footer>
  )
}
