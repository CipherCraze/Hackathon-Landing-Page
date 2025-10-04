function Sponsors() {
  return (
    <section id="sponsors" className="bg-gradient-to-b from-white via-ivory to-white py-24">
      <div className="mx-auto w-full max-w-7xl px-6 text-charcoal">
        <div className="flex flex-col gap-4 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-deepgreen">Partners</span>
          <h2 className="font-heading text-3xl font-black sm:text-4xl">Partner line-up to be announced</h2>
          <p className="mx-auto max-w-2xl text-sm text-charcoal/75">
            We&apos;re in conversations with ecosystem allies across government, media, maker spaces, and investors. The confirmed sponsor
            roster will be unveiled shortly.
          </p>
        </div>

        <div className="mt-12 rounded-3xl border border-kasavu/25 bg-white/90 p-10 text-center shadow-[inset_0_0_20px_rgba(232,185,35,0.18)]">
          <p className="text-xs uppercase tracking-[0.35em] text-deepgreen">Sponsors</p>
          <h3 className="mt-4 text-2xl font-semibold text-charcoal">To be announced</h3>
          <p className="mt-3 text-sm text-charcoal/70">
            Interested in collaborating? Drop us a note and we&apos;ll share the partner deck along with available slots.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-3xl border border-deepgreen/15 bg-gradient-to-r from-deepgreen/10 via-kasavu/15 to-saffron/15 px-6 py-8 sm:flex-row">
          <p className="text-sm text-charcoal/80">
            Want to join the celebration? Share your intent note and brand kit—we&apos;ll connect within two working days.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="mailto:partners@code-kalari.in"
              className="rounded-full border border-kasavu/35 bg-white/90 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-deepgreen transition hover:border-saffron/60 hover:text-saffron"
            >
              Become a Sponsor
            </a>
            <a
              href="https://code-kalari.in/partner-deck.pdf"
              className="rounded-full border border-deepgreen/15 bg-deepgreen/10 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-deepgreen transition hover:border-saffron/60 hover:text-saffron"
            >
              Download Partner Deck
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sponsors