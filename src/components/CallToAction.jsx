function CallToAction() {
  return (
    <section
      id="register"
      className="relative overflow-hidden border-y border-white/5 bg-slate-950/85 py-24"
    >
      <div className="absolute inset-0">
        <div className="absolute left-20 top-12 h-72 w-72 rounded-full bg-gradient-to-br from-amber-400/25 via-orange-500/15 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-20 h-64 w-64 translate-y-1/2 rounded-full bg-gradient-to-tl from-indigo-500/30 via-blue-500/20 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 text-center">
        <div className="space-y-4">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-300">Join the mission</span>
          <h2 className="text-3xl font-black text-white sm:text-4xl">Ready to ship your future-forward prototype?</h2>
          <p className="text-sm text-slate-300">
            Replace this placeholder copy with the actual registration flow: ticketing link, application deadlines, eligibility
            criteria, and team formation guidelines.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://your-registration-link.com"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500 px-6 py-3 text-sm font-bold uppercase tracking-[0.35em] text-slate-950 shadow-[0_0_25px_rgba(249,115,22,0.4)] transition hover:brightness-110"
          >
            Apply to Participate
          </a>
          <a
            href="mailto:team@cipherthon.com"
            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-slate-200 transition hover:border-amber-300 hover:text-amber-200"
          >
            Talk to Organisers
          </a>
        </div>
        <div
          id="problem-statement"
          className="rounded-3xl border border-white/10 bg-slate-950/80 p-8 text-left shadow-[0_0_30px_rgba(249,115,22,0.2)]"
        >
          <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-amber-300">Problem statement deck</p>
              <h3 className="mt-3 text-lg font-semibold text-white">Placeholder for your official challenge brief</h3>
              <p className="mt-3 text-sm text-slate-300">
                Summarise how builders can access the complete PDF, APIs, data sets, and evaluation rubrics. Include any pre-hack
                webinars or briefing sessions.
              </p>
            </div>
            <div className="space-y-3 text-sm text-slate-200">
              <p className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                • Link upcoming release of the briefing deck here.
              </p>
              <p className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                • Mention required documentation such as pitch decks, code repos, and demo videos.
              </p>
              <a
                href="/path-to-problem-statement.pdf"
                className="inline-flex w-full items-center justify-center rounded-full border border-amber-400/50 bg-gradient-to-r from-amber-400/15 via-orange-500/15 to-pink-500/15 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-amber-200 transition hover:border-amber-300 hover:text-amber-100"
              >
                Download Placeholder Deck
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
