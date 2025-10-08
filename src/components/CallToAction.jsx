function CallToAction() {
  return (
    <section
      id="register"
      className="relative overflow-hidden border-y border-kasavu/25 bg-gradient-to-b from-ivory via-white to-ivory py-24"
    >
      <div className="absolute inset-0">
        <div className="absolute left-16 top-12 h-72 w-72 rounded-full bg-gradient-to-br from-kasavu/25 via-saffron/15 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-16 h-64 w-64 translate-y-1/2 rounded-full bg-gradient-to-tl from-deepgreen/25 via-deepgreen/15 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 text-center">
        <div className="space-y-4 text-charcoal">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-deepgreen">Join the kalari</span>
          <h2 className="font-heading text-3xl font-black sm:text-4xl">Ready to co-create Kerala&apos;s next cultural innovation?</h2>
          <p className="text-sm text-charcoal/75">
            Teams of 3–5 makers. Submit your crew by 25 August 2025. Scholarships available for student founders, women, and
            artisans. Remote contributors welcome via the virtual kalari.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://code-kalari.in/register"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-kasavu via-saffron to-vermilion px-6 py-3 text-sm font-bold uppercase tracking-[0.35em] text-charcoal shadow-kasavu transition hover:brightness-105"
          >
            Apply to Participate
          </a>
          <a
            href="mailto:codekalari@iiitkottayam.ac.in"
            className="inline-flex items-center rounded-full border border-deepgreen/20 bg-white/85 px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-deepgreen transition hover:border-saffron/60 hover:text-saffron"
          >
            Talk to Organisers
          </a>
        </div>
        <div
          id="problem-statement"
          className="rounded-3xl border border-kasavu/25 bg-white/90 p-8 text-left shadow-[0_0_30px_rgba(232,185,35,0.2)]"
        >
          <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-deepgreen">Challenge compendium</p>
              <h3 className="mt-3 text-lg font-semibold text-charcoal">Everything you need to dive into the kalari</h3>
              <p className="mt-3 text-sm text-charcoal/75">
                Access the challenge briefs, API keys, heritage datasets, and judging rubrics. Join the pre-event Onam circle on 1
                September for walkthroughs and mentor matchmaking.
              </p>
            </div>
            <div className="space-y-3 text-sm text-charcoal/75">
              <p className="rounded-2xl border border-deepgreen/15 bg-deepgreen/5 px-4 py-3">
                • Early access Q&amp;A with CultureTech mentors on 28 August.
              </p>
              <p className="rounded-2xl border border-deepgreen/15 bg-deepgreen/5 px-4 py-3">
                • Submission kit includes pitch deck template, demo script, and repo checklist.
              </p>
              <a
                href="https://code-kalari.in/Code-Kalari-Challenge-Deck.pdf"
                className="inline-flex w-full items-center justify-center rounded-full border border-kasavu/40 bg-gradient-to-r from-kasavu/20 via-saffron/15 to-vermilion/15 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-deepgreen transition hover:border-saffron/60 hover:text-saffron"
              >
                Download Brief Deck
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
