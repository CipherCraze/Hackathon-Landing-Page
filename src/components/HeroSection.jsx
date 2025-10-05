import { motion } from 'framer-motion'
import DotGrid from './DotGrid'
import CountdownTimer from './CountdownTimer'

function HeroSection() {
  // Target date: January 10, 2026 at 10:00 AM IST
  const targetDate = new Date('2026-01-10T10:00:00+05:30')
  const fixedPookalams = [
    // Increased opacity for clearer visibility
    { left: '30%', top: '7%', size: 220, delay: 0, duration: 42, opacity: 0.3, rotateDir: 1 },
    { left: '55%', top: '18%', size: 360, delay: 6, duration: 56, opacity: 0.2, rotateDir: -1 },
    { left: '84%', top: '10%', size: 200, delay: 3, duration: 48, opacity: 0.3, rotateDir: 1 },
  ]
  
  return (
    <section
      id="hero"
      className="min-h-[10vh] relative isolate overflow-hidden bg-ivory pt-28 pb-24 sm:pt-32 sm:pb-32"
      style={{
        backgroundImage:
          'linear-gradient(rgba(15,81,50,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(15,81,50,0.05) 1px, transparent 1px)',
        backgroundSize: '120px 120px',
      }}
    >
      <div className="absolute inset-0 -z-20 opacity-30">
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor="#2596be"
          activeColor="#2596be"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={900}
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
        {/*<motion.span
          className="absolute left-12 top-20 h-24 w-24 rounded-full border-2 border-kasavu/60"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
        />*/}
        {/*<motion.span
          className="absolute right-12 top-36 h-16 w-16 rounded-full border border-saffron/40"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 22, ease: 'linear' }}
        />*/}
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

      {/* Centered main hero content */}
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-6 text-center">
          <motion.div
            className="relative space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="font-heading text-6xl font-black leading-tight text-charcoal sm:text-7xl md:text-8xl lg:text-8xl">
          Code-Kalari
          <br />
          <span className=" bg-gradient-to-r from-kasavu via-saffron to-vermilion bg-clip-text text-transparent">
            2026
          </span>
            </h1>
            
            <a
          href="#register"
          className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-kasavu via-saffron to-vermilion px-7 py-5 text-2xl font-bold uppercase tracking-widest text-charcoal shadow-lg transition hover:brightness-110 hover:scale-90"
            >
          Register Now
            </a>
          </motion.div>
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
          className="absolute top-8 right-4 z-40 lg:top-6 lg:right-8"
          initial={{ opacity: 0, y: -6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
        >
          <div className="inline-flex items-center gap-3 rounded-full bg-white/85 backdrop-blur-sm border border-kasavu/20 px-3 py-2 shadow-sm">
            <span className="sr-only">Countdown to Kalari</span>
            <CountdownTimer 
              targetDate={targetDate}
              compact={true}
            />
          </div>
        </motion.div>
      </div>
      {/* bottom-left decorative image */}
      <img
        src="/images/Gemini_Generated_Image_hxessjhxessjhxes-removebg-preview.png"
        alt=""
        aria-hidden="true"
        className="absolute left-2 bottom-0 pointer-events-none z-20 w-64 sm:w-80 md:w-[28rem] lg:w-[30rem] opacity-95"
      />

      {/* bottom-right decorative image */}
      <img
        src="/images/m.png"
        alt=""
        aria-hidden="true"
        className="absolute right-1 bottom-0 pointer-events-none z-20 w-28 sm:w-40 md:w-48 lg:w-[50rem]  opacity-50"
      />
      <hr className="absolute left-0 bottom-0 w-full h-1 bg-black opacity-50" />

    </section>
  )
}

export default HeroSection
