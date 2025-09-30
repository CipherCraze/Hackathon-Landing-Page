import { motion } from 'framer-motion'
import { FiExternalLink, FiPlay } from 'react-icons/fi'

const stats = [
  { label: 'Hours', value: '24', copy: 'Non-stop creation' },
  { label: 'Teams', value: '150+', copy: 'Nationwide innovators' },
  { label: 'Prize Pool', value: '₹ 10L+', copy: 'Cash & goodies' },
  { label: 'Location', value: 'Hybrid', copy: 'IM Punjab + Metaverse' },
]

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-slate-950/95 pt-28 pb-24 sm:pt-32 sm:pb-32"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[540px] w-[540px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-amber-400/20 via-orange-500/10 to-indigo-500/20 blur-3xl" />
        <div className="absolute -left-32 top-24 h-64 w-64 rounded-full bg-gradient-to-b from-amber-400/30 to-transparent blur-3xl" />
        <div className="absolute -right-24 bottom-20 h-72 w-72 rounded-full bg-gradient-to-tr from-indigo-500/30 via-blue-500/20 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 lg:flex-row lg:items-center lg:gap-24">
        <motion.div
          className="relative max-w-xl space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-amber-300">
            CipherThon 2.0
          </span>
          <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Learn, Build & Innovate at the National 24hr Hackathon
          </h1>
          <p className="text-base text-slate-300 sm:text-lg">
            Immerse yourself in a futuristic hackathon experience. Collaborate with trailblazers, tackle real-world challenges,
            and ship a visionary prototype in record time. Placeholder copy for your event details.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#register"
              className="relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500 px-6 py-3 text-sm font-bold uppercase tracking-widest text-slate-950 shadow-[0_0_25px_rgba(249,115,22,0.4)] transition hover:brightness-110"
            >
              <FiPlay className="text-lg" /> Register Now
            </a>
            <a
              href="#problem-statement"
              className="group relative inline-flex items-center gap-3 rounded-full border border-white/10 bg-slate-950/80 px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-slate-200 transition hover:border-amber-300 hover:text-amber-100"
            >
              View Problem Statement
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-base text-amber-400">
                <FiExternalLink />
              </span>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/5 bg-white/5 p-4 shadow-inner shadow-amber-500/10"
              >
                <p className="text-sm uppercase tracking-[0.35em] text-amber-300">{item.label}</p>
                <p className="mt-2 text-2xl font-bold text-white">{item.value}</p>
                <p className="text-xs text-slate-400">{item.copy}</p>
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
          <div className="relative w-full max-w-[420px] overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/80 p-6 shadow-[0_0_45px_rgba(25,28,60,0.45)]">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-amber-400/10 via-orange-500/5 to-indigo-500/10 blur-2xl" />
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300">Live Countdown</p>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.4em] text-white">
                  AI-Ready
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[{ label: 'Days' }, { label: 'Hours' }, { label: 'Minutes' }, { label: 'Seconds' }].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-6 text-center">
                    <p className="text-4xl font-black text-white">00</p>
                    <p className="text-xs uppercase tracking-[0.35em] text-amber-300">{item.label}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-300">
                Hook up the live timer by feeding event time into the countdown component. Encourage future automation.
              </p>
              <button
                type="button"
                className="w-full rounded-2xl border border-amber-400/40 bg-gradient-to-r from-amber-400/20 via-orange-500/10 to-indigo-500/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-amber-200 transition hover:border-amber-400/80 hover:text-amber-100"
              >
                Sync Schedule
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
