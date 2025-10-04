const sponsors = [
  { name: 'Kerala Startup Mission', tier: 'Title Partner' },
  { name: 'Dept. of Tourism Kerala', tier: 'Destination Partner' },
  { name: 'Malayala Manorama', tier: 'Media Ally' },
  { name: 'Onam Festival Council', tier: 'Cultural Patron' },
  { name: 'NASSCOM Kerala', tier: 'Innovation Network' },
  { name: 'TinkerHub', tier: 'Community Partner' },
  { name: 'FabLab Kochi', tier: 'Makerspace Partner' },
  { name: 'Rainmatter', tier: 'Impact Investor' },
  { name: 'Your Brand Here', tier: 'Supporter Slot' },
]

function Sponsors() {
  return (
    <section id="sponsors" className="bg-gradient-to-b from-white via-ivory to-white py-24">
      <div className="mx-auto w-full max-w-7xl px-6 text-charcoal">
        <div className="flex flex-col gap-4 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-deepgreen">Partners</span>
          <h2 className="font-heading text-3xl font-black sm:text-4xl">Powered by Kerala&apos;s creative ecosystem</h2>
          <p className="mx-auto max-w-2xl text-sm text-charcoal/75">
            Ecosystem allies across government, media, maker spaces, and investors join hands to nurture ideas born at Code-Kalari.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sponsors.map((sponsor, index) => (
            <div
              key={`${sponsor.name}-${index}`}
              className="group relative overflow-hidden rounded-3xl border border-kasavu/25 bg-white/90 p-6 shadow-[inset_0_0_20px_rgba(232,185,35,0.18)]"
            >
              <div className="absolute inset-0 -z-10 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-kasavu/30 via-saffron/20 to-vermilion/25 blur-3xl" />
              </div>
              <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-deepgreen/15 bg-ivory/80 text-lg font-bold uppercase tracking-[0.35em] text-deepgreen">
                  {sponsor.name === 'Your Brand Here' ? '?' : sponsor.name.charAt(0)}
                </div>
                <p className={`text-lg font-semibold ${sponsor.name === 'Your Brand Here' ? 'italic text-charcoal/50' : 'text-charcoal'}`}>
                  {sponsor.name}
                </p>
                <p className="text-xs uppercase tracking-[0.35em] text-charcoal/60">{sponsor.tier}</p>
                {sponsor.name === 'Your Brand Here' && (
                  <p className="text-[0.65rem] uppercase tracking-[0.35em] text-charcoal/50">
                    Showcase your logo in kasavu
                  </p>
                )}
              </div>
            </div>
          ))}
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