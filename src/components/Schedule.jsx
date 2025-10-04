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
          <h2 className="font-heading text-3xl font-black sm:text-4xl">Detailed agenda to be announced</h2>
          <p className="mx-auto max-w-3xl text-sm text-charcoal/75">
            We&apos;re finalising the hour-by-hour flow with venue partners, mentors, and cultural performers. Expect a blend of build
            time, showcases, and wellness breaks—full timeline arrives soon.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl rounded-[32px] border border-kasavu/25 bg-white/90 p-10 text-center shadow-kasavu">
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-4">
            <p className="text-xs uppercase tracking-[0.35em] text-deepgreen">Agenda status</p>
            <h3 className="text-2xl font-semibold text-charcoal">To be announced</h3>
            <p className="text-sm text-charcoal/70">
              Subscribe to our newsletter or follow @codekalari on social to be the first to know when the official schedule drops.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Schedule