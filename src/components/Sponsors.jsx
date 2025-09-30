

const sponsors = [
  { name: 'Google', tier: 'Platinum Sponsor' },
  { name: 'Discord', tier: 'Community Partner' },
  { name: 'Brave', tier: 'Privacy Partner' },
  { name: 'Jump', tier: 'Blockchain Ally' },
  { name: 'Circle', tier: 'Fintech Partner' },
  { name: 'Magic Eden', tier: 'Metaverse Partner' },
  { name: 'Open Slot', tier: 'Your Brand Here' },
  { name: 'Open Slot', tier: 'Your Brand Here' },
  { name: 'Open Slot', tier: 'Your Brand Here' },
]

function Sponsors() {
  return (
    <section id="sponsors" className="bg-slate-950/95 py-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="flex flex-col gap-4 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-300">Partners</span>
          <h2 className="text-3xl font-black text-white sm:text-4xl">Supported by visionary ecosystems</h2>
          <p className="mx-auto max-w-2xl text-sm text-slate-400">
            Placeholder copy: Update with your confirmed sponsors, community partners, and ecosystem collaborators.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sponsors.map((sponsor, index) => (
            <div
              key={`${sponsor.name}-${index}`}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-inner"
            >
              <div className="absolute inset-0 -z-10 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/30 via-orange-500/20 to-indigo-500/30 blur-3xl" />
              </div>
              <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/80 text-lg font-bold uppercase tracking-[0.35em] text-amber-200">
                  {sponsor.name.charAt(0)}
                </div>
                <p className={`text-lg font-semibold text-white ${sponsor.name === 'Open Slot' ? 'italic text-slate-400' : ''}`}>
                  {sponsor.name}
                </p>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-400">{sponsor.tier}</p>
                {sponsor.name === 'Open Slot' && (
                  <p className="text-[0.65rem] uppercase tracking-[0.35em] text-slate-500">
                    Drop logo here
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-3xl border border-amber-400/40 bg-gradient-to-r from-amber-400/10 via-orange-500/10 to-pink-500/10 px-6 py-8 sm:flex-row">
          <p className="text-sm text-slate-200">
            Looking to collaborate? Drop your brand kit and we will reach out.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="mailto:partnerships@cipherthon.com"
              className="rounded-full border border-white/10 bg-slate-950/80 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-amber-200 transition hover:border-amber-300 hover:text-amber-100"
            >
              Become a Sponsor
            </a>
            <a
              href="#partner-deck"
              className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-slate-200 transition hover:border-amber-300 hover:text-amber-200"
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