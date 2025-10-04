function Themes() {
  return (
    <section id="themes" className="relative overflow-hidden bg-gradient-to-br from-ivory via-white to-ivory py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-10 h-60 w-60 -translate-x-1/3 rounded-full bg-gradient-to-br from-kasavu/25 via-saffron/20 to-transparent blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 translate-x-1/4 translate-y-1/4 rounded-full bg-gradient-to-t from-deepgreen/30 via-deepgreen/10 to-transparent blur-3xl" />
      </div>
      <div className="relative mx-auto w-full max-w-7xl px-6">
        <div className="flex flex-col gap-6 pb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-deepgreen">Innovation Tracks</span>
            <h2 className="mt-3 font-heading text-3xl font-black text-charcoal sm:text-4xl">Challenge tracks to be announced</h2>
          </div>
          <p className="max-w-xl text-sm text-charcoal/75">
            We&apos;re curating problem statements with cultural leaders, sustainability experts, and partner communities. Check back soon for
            the full set of tracks you can choose from.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <div className="relative overflow-hidden rounded-3xl border border-kasavu/25 bg-white/85 p-8 text-center shadow-lg">
            <div className="absolute inset-0 -z-10 opacity-40">
              <div className="absolute inset-0 bg-gradient-to-br from-kasavu/20 via-saffron/20 to-vermilion/20 blur-3xl" />
            </div>
            <p className="text-xs uppercase tracking-[0.35em] text-deepgreen">Tracks</p>
            <h3 className="mt-4 text-xl font-semibold text-charcoal">To be announced</h3>
            <p className="mt-3 text-sm text-charcoal/70">
              The final list of innovation themes will be unveiled soon. Follow our updates for the official reveal.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-3xl border border-deepgreen/15 bg-gradient-to-r from-deepgreen/10 via-kasavu/15 to-saffron/15 px-6 py-8 text-charcoal sm:flex-row">
          <p className="text-sm">
            Have a local problem that needs bright minds? Submit your prompt and we&apos;ll consider it for the official track reveal.
          </p>
          <a
            href="#submit-theme"
            className="rounded-full border border-kasavu/40 bg-white/90 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-deepgreen transition hover:border-saffron/60 hover:text-saffron"
          >
            Share a Challenge
          </a>
        </div>
      </div>
    </section>
  )
}

export default Themes