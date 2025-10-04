import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMusic, FiPlay, FiSunrise } from 'react-icons/fi'

const stats = [
  { label: 'Duration', value: '24 Hrs', copy: 'Immersive cultural sprint' },
  { label: 'Creators', value: '200+', copy: 'Makers across Kerala & beyond' },
  { label: 'Prize Pool', value: '₹ 30K', copy: 'Kasavu-lined accolades' },
  { label: 'Culture Blend', value: '100%', copy: 'Tradition × Technology' },
]

function HeroSection() {
  const [musicOn, setMusicOn] = useState(false)
  const fixedPookalams = [
    { left: '12%', top: '56%', size: 220, delay: 0, duration: 42, opacity: 0.28, rotateDir: 1 },
    { left: '50%', top: '18%', size: 360, delay: 6, duration: 56, opacity: 0.22, rotateDir: -1 },
    { left: '84%', top: '30%', size: 200, delay: 3, duration: 48, opacity: 0.2, rotateDir: 1 },
  ]

  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-ivory pt-28 pb-24 sm:pt-32 sm:pb-32"
      style={{
        backgroundImage:
          'linear-gradient(rgba(15,81,50,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(15,81,50,0.05) 1px, transparent 1px)',
        backgroundSize: '120px 120px',
      }}
    >
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
            className="pointer-events-none absolute -left-24 -top-20 hidden w-80 opacity-30 blur-[0.3px] sm:block"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 42, ease: 'linear' }}
          />
          <span className="inline-flex items-center gap-2 rounded-full border border-kasavu/40 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.45em] text-deepgreen">
            Code-Kalari 2025
          </span>
          <h1 className="font-heading text-4xl font-black leading-tight text-charcoal sm:text-5xl lg:text-6xl">
            Where Kerala&apos;s festival spirit meets future-forward code
          </h1>
          <p className="text-base text-charcoal/75 sm:text-lg">
            Immerse in a 24-hour celebration of collaboration, craftsmanship, and culture. Build climate-ready solutions, smart
            tourism tech, and heritage storytelling experiences inspired by the spirit of Onam.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#register"
              className="relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-kasavu via-saffron to-vermilion px-6 py-3 text-sm font-bold uppercase tracking-widest text-charcoal shadow-kasavu transition hover:brightness-110"
            >
              <FiPlay className="text-lg" /> Register Now
            </a>
            <a
              href="#themes"
              className="group relative inline-flex items-center gap-3 rounded-full border border-deepgreen/15 bg-white/85 px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-deepgreen transition hover:border-saffron/70 hover:text-saffron"
            >
              Explore Tracks
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-kasavu/30 bg-kasavu/20 text-base text-deepgreen">
                <FiSunrise />
              </span>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-kasavu/25 bg-white/70 p-4 shadow-[inset_0_0_25px_rgba(232,185,35,0.15)]"
              >
                <p className="text-sm uppercase tracking-[0.35em] text-deepgreen">{item.label}</p>
                <p className="mt-2 text-2xl font-bold text-charcoal">{item.value}</p>
                <p className="text-xs text-charcoal/70">{item.copy}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto flex w-full max-w-lg justify-center lg:mx-0"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        >
          <div className="relative w-full max-w-[420px] overflow-hidden rounded-[32px] border border-kasavu/35 bg-white/90 p-6 shadow-[0_0_45px_rgba(232,185,35,0.25)]">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-kasavu/25 via-saffron/15 to-vermilion/20 blur-2xl" />
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-deepgreen">Countdown to Kalari</p>
                <button
                  type="button"
                  onClick={() => setMusicOn((prev) => !prev)}
                  className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs uppercase tracking-[0.35em] transition ${
                    musicOn
                      ? 'border-vermilion/40 bg-vermilion/15 text-vermilion'
                      : 'border-deepgreen/20 bg-deepgreen/10 text-deepgreen'
                  }`}
                >
                  <FiMusic />
                  {musicOn ? 'Onam Beats On' : 'Play Onam Beats'}
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[{ label: 'Days' }, { label: 'Hours' }, { label: 'Minutes' }, { label: 'Seconds' }].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-kasavu/25 bg-white/80 px-5 py-6 text-center">
                    <p className="text-4xl font-black text-charcoal">00</p>
                    <p className="text-xs uppercase tracking-[0.35em] text-deepgreen">{item.label}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-charcoal/70">
                The Athapookalam ignites on 12 September 2025 · 9:00 AM IST at Kerala Arts & Craft Village, Trivandrum.
                Remote creators can join via our virtual kalari.
              </p>
              <button
                type="button"
                className="w-full rounded-2xl border border-deepgreen/20 bg-gradient-to-r from-deepgreen/15 via-kasavu/20 to-saffron/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-deepgreen transition hover:border-saffron/50 hover:text-saffron"
              >
                Download Full Schedule
              </button>
            </div>
          </div>
        </motion.div>
      </div>
      
    </section>
  )
}

export default HeroSection
