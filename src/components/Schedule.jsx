

const timeline = [
  {
    time: '09:30 - 10:30',
    title: 'Phase 0 · Opening',
    description: 'Registration, welcome keynote, and partner briefs. Placeholder text for actual agenda.',
  },
  {
    time: '10:30 - 13:30',
    title: 'Phase I · Ideation Sprint',
    description: 'Team formation, idea validation clinics, mentor office hours.',
  },
  {
    time: '14:30 - 18:30',
    title: 'Phase II · Build Marathon',
    description: 'Heads-down prototyping across themes, API support pods available throughout.',
  },
  {
    time: '19:00 - 22:00',
    title: 'Phase III · Final Submission',
    description: 'Pitch deck polish, submission checks, and pre-demo rehearsals.',
  },
  {
    time: '22:30 - 24:00',
    title: 'Phase IV · Demo Night',
    description: 'Jury panels, live demos, audience voting, and closing awards.',
  },
]

function Schedule() {
  return (
    <section id="schedule" className="relative overflow-hidden bg-slate-950 py-24">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-b from-amber-400/30 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 translate-y-1/3 rounded-full bg-gradient-to-tl from-indigo-500/30 via-blue-500/20 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="flex flex-col gap-6 pb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-300">Schedule</span>
          <h2 className="text-3xl font-black text-white sm:text-4xl">24-Hour Immersive Journey</h2>
          <p className="mx-auto max-w-3xl text-sm text-slate-400">
            Replace placeholders with your precise agenda. Break down day-of sessions, mentor touchpoints, workshops, and fun breaks
            to keep the energy high.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl border border-white/10 bg-white/5 p-8">
          <div className="absolute left-1/2 top-4 bottom-4 hidden w-px -translate-x-1/2 bg-gradient-to-b from-amber-400/70 via-white/40 to-pink-500/60 md:block" />
          <div className="space-y-8">
            {timeline.map((slot, index) => (
              <div key={slot.title} className="relative grid gap-4 md:grid-cols-2 md:items-center">
                <div className={`md:text-right ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <p className="text-xs uppercase tracking-[0.35em] text-amber-300">{slot.time}</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{slot.title}</h3>
                  <p className="mt-3 text-sm text-slate-300">{slot.description}</p>
                </div>
                <div className={`md:order-2 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.45em] text-slate-200">
                    Milestone {index + 1}
                  </div>
                </div>
                <span className="absolute left-1/2 top-1/2 hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-amber-400/50 bg-slate-950/80 text-base font-semibold text-amber-200 md:flex">
                  ●
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-xs uppercase tracking-[0.35em] text-slate-300">
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Wellness Pods</span>
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Mentor Corners</span>
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Lightning Talks</span>
        </div>
      </div>
    </section>
  )
}

export default Schedule