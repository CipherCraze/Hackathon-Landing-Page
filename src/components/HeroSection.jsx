import { motion } from 'framer-motion'
import DotGrid from './DotGrid'

function HeroSection() {
  const fixedPookalams = [
    // Increased opacity for clearer visibility
    { left: '12%', top: '16%', size: 220, delay: 0, duration: 42, opacity: 0.5, rotateDir: 1 },
    { left: '50%', top: '18%', size: 360, delay: 6, duration: 56, opacity: 0.5, rotateDir: -1 },
    { left: '84%', top: '30%', size: 200, delay: 3, duration: 48, opacity: 0.5, rotateDir: 1 },
  ]

  return (
    <section
      id="hero"
      className="min-h-screen relative isolate overflow-hidden bg-ivory pt-28 pb-24 sm:pt-32 sm:pb-32"
      style={{
        backgroundImage:
          'linear-gradient(rgba(15,81,50,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(15,81,50,0.05) 1px, transparent 1px)',
        backgroundSize: '120px 120px',
      }}
    >
      <div className="absolute inset-0 -z-20 opacity-40">
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor="#808080"
          activeColor="#2596be"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
          className="pointer-events-none"
        />
      </div>

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pookalam-radial blur-3xl" />
        <div className="absolute -left-16 top-16 h-60 w-60 rounded-full bg-gradient-to-br from-kasavu/40 via-saffron/35 to-transparent blur-3xl" />
        <div className="absolute right-[-120px] bottom-[-80px] h-[420px] w-[420px] rounded-full bg-gradient-to-tr from-deepgreen/35 via-vermilion/20 to-transparent blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-deepgreen/25 via-deepgreen/10 to-transparent" />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-24 top-6 h-64 w-64 rounded-full border border-kasavu/25 opacity-40" />
        <div className="absolute -right-12 top-24 h-52 w-52 rounded-full border border-deepgreen/20 opacity-30" />
        <div className="absolute right-20 bottom-24 h-44 w-44 rounded-full border border-vermilion/15 opacity-30" />
        <motion.span
          className="absolute left-12 top-20 h-24 w-24 rounded-full border-2 border-kasavu/60"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
        />
        <motion.span
          className="absolute right-12 top-36 h-16 w-16 rounded-full border border-saffron/40"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 22, ease: 'linear' }}
        />
        <motion.span
          className="absolute left-1/2 top-10 h-14 w-36 -translate-x-1/2 rounded-full bg-white/40 blur-3xl"
          animate={{ opacity: [0.35, 0.15, 0.35] }}
          transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
        />
        {fixedPookalams.map((item, i) => (
          <motion.img
            key={`pook-${i}`}
            src="/images/pookalam.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none hidden sm:block"
            style={{
              position: 'absolute',
              left: item.left,
              top: item.top,
              width: `${item.size}px`,
              height: 'auto',
              transform: 'translate(-50%, -50%)',
              opacity: item.opacity,
              filter: 'blur(0.4px)'
            }}
            initial={{ rotate: 0, y: 0 }}
            animate={{ rotate: item.rotateDir * 360, y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: item.duration, ease: 'linear', delay: item.delay }}
          />
        ))}
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 lg:flex-row lg:items-center lg:gap-24">
        <motion.div
          className="relative max-w-xl space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <motion.img
            src="/images/pookalam.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 -top-20 hidden w-80 opacity-60 blur-[0.3px] sm:block"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 42, ease: 'linear' }}
          />
          
          
          
          

          {/* stats removed for a cleaner, minimal hero */}
        </motion.div>

        <motion.div
          className="absolute top-6 right-6 z-30 w-full max-w-[420px] lg:top-8 lg:right-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        >
          <div className="relative w-full max-w-[420px] overflow-hidden rounded-[32px] border border-kasavu/35 bg-white/90 p-6 shadow-[0_0_45px_rgba(232,185,35,0.25)]">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-kasavu/25 via-saffron/15 to-vermilion/20 blur-2xl" />
            <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.35em] text-deepgreen">Countdown to Kalari</p>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {['Days', 'Hours', 'Minutes', 'Seconds'].map((label) => (
                    <div key={label} className="flex flex-col items-center justify-center rounded-lg border border-kasavu/20 bg-white/85 px-3 py-3 text-center">
                      <p className="text-xl font-black text-charcoal">00</p>
                      <p className="text-[10px] uppercase tracking-[0.35em] text-deepgreen">{label}</p>
                    </div>
                  ))}
                </div>
                {/* compact: event details and extra controls intentionally removed to keep the hero minimal */}
            </div>
          </div>
        </motion.div>
      </div>
      {/* bottom-left decorative image */}
      <img
        src="/images/Gemini_Generated_Image_hxessjhxessjhxes-removebg-preview.png"
        alt=""
        aria-hidden="true"
        className="absolute left-4 bottom-4 pointer-events-none z-20 w-40 sm:w-56 md:w-72 lg:w-96 opacity-95"
      />

      {/* bottom-right decorative image */}
      <img
        src="/images/Generated_Image_October_05__2025_-_4_39PM-removebg-preview.png"
        alt=""
        aria-hidden="true"
        className="absolute right-4 bottom-4 pointer-events-none z-20 w-28 sm:w-40 md:w-48 lg:w-64 opacity-95"
      />

    </section>
  )
}

export default HeroSection
