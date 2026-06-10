import { useState, useRef } from 'react'

export default function PhotoCarousel({ images }) {
  const [active, setActive] = useState(0)
  const startXRef = useRef(null)

  const prev = () => setActive(i => Math.max(0, i - 1))
  const next = () => setActive(i => Math.min(images.length - 1, i + 1))

  const onTouchStart = (e) => { startXRef.current = e.touches[0].clientX }
  const onTouchEnd = (e) => {
    if (startXRef.current === null) return
    const delta = startXRef.current - e.changedTouches[0].clientX
    if (delta > 40) next()
    else if (delta < -40) prev()
    startXRef.current = null
  }

  const n = images.length

  return (
    <div className="flex flex-col gap-4">
      {/* Viewport */}
      <div
        className="overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Track — width = n × 100% of viewport, shifted by CSS percentage */}
        <div
          className="flex"
          style={{
            width: `${n * 100}%`,
            transform: `translateX(-${active * (100 / n)}%)`,
            transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          {images.map((img, i) => (
            <div key={i} style={{ width: `${100 / n}%`, flexShrink: 0 }}>
              <img
                src={img.src}
                alt={img.alt}
                className="w-full aspect-square object-cover block"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            onClick={prev}
            disabled={active === 0}
            aria-label="Previous"
            className="w-8 h-8 flex items-center justify-center border border-forest/20 text-forest/50 hover:border-forest/50 hover:text-forest transition-all duration-200 disabled:opacity-20 disabled:cursor-not-allowed"
          >
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5">
              <path d="M10 3L5 8l5 5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={next}
            disabled={active === images.length - 1}
            aria-label="Next"
            className="w-8 h-8 flex items-center justify-center border border-forest/20 text-forest/50 hover:border-forest/50 hover:text-forest transition-all duration-200 disabled:opacity-20 disabled:cursor-not-allowed"
          >
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5">
              <path d="M6 3l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="flex items-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to photo ${i + 1}`}
              className={`transition-all duration-300 ${
                i === active
                  ? 'w-5 h-1.5 bg-olive'
                  : 'w-1.5 h-1.5 rounded-full bg-forest/20 hover:bg-forest/40'
              }`}
            />
          ))}
        </div>

        {images[active]?.title && (
          <p className="text-[11px] font-lato tracking-wide text-charcoal/45 italic text-right max-w-[40%]">
            {images[active].title}
          </p>
        )}
      </div>
    </div>
  )
}
