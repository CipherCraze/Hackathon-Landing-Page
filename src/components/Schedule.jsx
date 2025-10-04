const timeline = [
  {
    time: '08:00 – 09:00',
    title: 'Arrival · Nilavilakku Lighting',
    description: 'Check-in with coconut water, Athapookalam unveiling, and blessings from cultural ambassadors.',
  },
  {
    time: '09:00 – 11:00',
    title: 'Kalari Warm-up · Ideation Circles',
    description: 'Palaver sessions with mentors to select tracks, map local challenges, and storyboard impact.',
  },
  {
    time: '11:30 – 17:00',
    title: 'Build Marathon · Sprint Blocks',
    description: 'Heads-down prototyping, usability tests with community champions, and culture jams every 120 minutes.',
  },
  {
    time: '17:30 – 19:00',
    title: 'Sunset Cruise · Storycrafting',
    description: 'Boat-race inspired pitch coaching, fand crafted reels, and rehearsal pods by the pavilion.',
  },
  {
    time: '19:30 – 22:00',
    title: 'Demo Night · Lotus Stage',
    description: 'Showcase to jury, live music interludes, audience choice voting, and awards in kasavu splendour.',
  },
]

function Schedule() {
  return (
    <section id="schedule" className="relative overflow-hidden bg-gradient-to-b from-deepgreen/15 via-ivory to-white py-24">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-b from-kasavu/35 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 translate-y-1/3 rounded-full bg-gradient-to-tl from-vermilion/25 via-saffron/25 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6">
        <div className="flex flex-col gap-6 pb-12 text-center text-charcoal">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-deepgreen">Schedule</span>
          <h2 className="font-heading text-3xl font-black sm:text-4xl">24-hour cultural innovation journey</h2>
          <p className="mx-auto max-w-3xl text-sm text-charcoal/75">
            Flow through kalari-inspired sprints, heritage workshops, and evening showcases. Our timeline keeps energy high and
            culture at the centre of every prototype.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl rounded-[32px] border border-kasavu/25 bg-white/90 p-8 shadow-kasavu">
          <div className="absolute left-1/2 top-6 bottom-6 hidden w-px -translate-x-1/2 bg-gradient-to-b from-deepgreen/40 via-kasavu/40 to-vermilion/40 md:block" />
          <div className="space-y-8">
            {timeline.map((slot, index) => (
              <div key={slot.title} className="relative grid gap-4 md:grid-cols-2 md:items-center">
                <div className={`md:text-right ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <p className="text-xs uppercase tracking-[0.35em] text-deepgreen">{slot.time}</p>
                  <h3 className="mt-2 text-xl font-semibold text-charcoal">{slot.title}</h3>
                  <p className="mt-3 text-sm text-charcoal/70">{slot.description}</p>
                </div>
                <div className={`md:order-2 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <div className="inline-flex items-center gap-2 rounded-full border border-kasavu/25 bg-kasavu/10 px-4 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.45em] text-deepgreen">
                    Lotus Step {index + 1}
                  </div>
                </div>
                <span className="absolute left-1/2 top-1/2 hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-deepgreen/30 bg-white/90 text-base font-semibold text-deepgreen md:flex">
                  ●
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-xs uppercase tracking-[0.35em] text-deepgreen">
          <span className="rounded-full border border-deepgreen/15 bg-white/80 px-4 py-2">Yoga Nidra Pods</span>
          <span className="rounded-full border border-deepgreen/15 bg-white/80 px-4 py-2">Mentor Kathakali hours</span>
          <span className="rounded-full border border-deepgreen/15 bg-white/80 px-4 py-2">Boat race progress bar</span>
        </div>
      </div>
    </section>
  )
}

export default Schedule