function Team() {
  return (
    <section id="team" className="relative overflow-hidden bg-gradient-to-b from-ivory via-white to-ivory py-24">
      <div className="absolute inset-0">
        <div className="absolute left-10 top-10 h-64 w-64 rounded-full bg-gradient-to-br from-kasavu/25 via-saffron/20 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 translate-y-1/3 rounded-full bg-gradient-to-tl from-deepgreen/25 via-deepgreen/15 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 text-charcoal">
        <div className="flex flex-col gap-4 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-deepgreen">Team</span>
          <h2 className="font-heading text-3xl font-black sm:text-4xl">Core team to be announced</h2>
          <p className="mx-auto max-w-3xl text-sm text-charcoal/75">
            We&apos;ll publish the full organising guild, mentor council, and jury once confirmations are wrapped. Expect a blend of
            culture bearers and technologists.
          </p>
        </div>

        <div className="mt-12 rounded-3xl border border-kasavu/25 bg-white/90 p-10 text-center shadow-lg">
          <p className="text-xs uppercase tracking-[0.35em] text-deepgreen">Organising guild</p>
          <h3 className="mt-4 text-2xl font-semibold text-charcoal">To be announced</h3>
          <p className="mt-3 text-sm text-charcoal/70">
            Our organiser introductions and mentor roster will go live soon. Follow our channels for the weekly reveal series.
          </p>
          <p className="mt-6 text-xs text-charcoal/55">
            Want to volunteer or mentor? Write to hello@code-kalari.in with your focus area and availability.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Team
