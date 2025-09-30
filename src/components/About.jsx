import CountdownTimer from './CountdownTimer'

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-y border-white/5 bg-slate-950/80 py-24"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-pink-500/60 to-transparent" />
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-amber-300">
            About CipherThon 2.0
          </span>
          <h2 className="text-3xl font-black text-white sm:text-4xl">
            National-level innovation sprint designed for future-ready builders
          </h2>
          <p className="text-base text-slate-300">
            Placeholder copy: share the essence of your hackathon, what participants can expect, and how it stands apart.
            Mention the mission, partners, and the overarching goal of sparking ideas into real-world solutions.
          </p>
          <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-amber-300">Venue</p>
                <p className="text-lg font-semibold text-white">IM Punjab, Chandigarh</p>
                <p className="text-sm text-slate-400">Hybrid access with immersive virtual spaces.</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-amber-300">Date</p>
                <p className="text-lg font-semibold text-white">Friday, 10 January 2026</p>
                <p className="text-sm text-slate-400">Doors open 8:00 AM IST · Opening ceremony 9:30 AM.</p>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-amber-300">Presented by</p>
              <p className="text-lg font-semibold text-white">
                CipherSchools × Innovation Studio – Empowering the next-gen builders.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-6 rounded-[32px] border border-white/10 bg-slate-950/70 p-8 shadow-[0_0_45px_rgba(249,115,22,0.15)]">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">Countdown to kick-off</h3>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.35em] text-amber-300">
              Live
            </span>
          </div>
          <CountdownTimer targetDate="2026-01-10T09:30:00" />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { label: 'Capacity', copy: 'Accommodating 500+ hybrid participants' },
              { label: 'Tracks', copy: 'AI, Sustainability, FinTech, Civic Tech' },
              { label: 'Mentors', copy: '40+ industry experts across domains' },
              { label: 'Perks', copy: 'Swag kits, cloud credits & internships' },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.35em] text-amber-300">{item.label}</p>
                <p className="mt-1 text-sm text-slate-200">{item.copy}</p>
              </div>
            ))}
          </div>
          <a
            href="#register"
            className="inline-flex items-center justify-center rounded-2xl border border-amber-400/50 bg-gradient-to-r from-amber-400/20 via-orange-500/10 to-pink-500/20 px-5 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-amber-200 transition hover:border-amber-300 hover:text-amber-100"
          >
            Secure your slot
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
