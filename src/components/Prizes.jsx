function Prizes() {
  return (
    <section id="prizes" className="relative overflow-hidden bg-gradient-to-br from-ivory via-white to-ivory py-24">
      <div className="absolute inset-0">
        <div className="absolute left-1/3 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-gradient-to-br from-kasavu/30 via-saffron/20 to-vermilion/25 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-gradient-to-tl from-deepgreen/25 via-deepgreen/15 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 text-charcoal">
        <div className="flex flex-col gap-4 text-left sm:text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-deepgreen">Prizes</span>
          <h2 className="font-heading text-3xl font-black sm:text-4xl">Prize showcase to be announced</h2>
          <p className="max-w-3xl text-sm text-charcoal/75 sm:mx-auto">
            Our prize partners are crafting a package that blends cash rewards, pilots, and cultural experiences. We&apos;ll reveal the
            complete structure once all confirmations are in place.
          </p>
        </div>

        <div className="mt-12 rounded-3xl border border-kasavu/30 bg-white/90 p-10 text-center shadow-lg">
          <p className="text-xs uppercase tracking-[0.35em] text-deepgreen">Prize pool</p>
          <h3 className="mt-4 text-2xl font-semibold text-charcoal">To be announced</h3>
          <p className="mt-3 text-sm text-charcoal/70">
            Cash awards, residencies, and partner perks will be detailed once agreements are signed. Stay tuned for the official
            announcement.
          </p>
          <p className="mt-6 text-xs text-charcoal/55">
            Have a prize collaboration in mind? Reach out via partners@code-kalari.in and we&apos;ll be in touch.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Prizes