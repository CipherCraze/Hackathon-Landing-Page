const themes = [
  {
    title: 'Sustainable Kerala',
    description:
      'Design circular-economy solutions for waste, water, and agriculture across the state. Build dashboards, IoT meshes, and policy tools that empower communities to nurture the ecosystem.',
    tag: 'Climate & Agritech',
  },
  {
    title: 'Smart Tourism & Backwaters',
    description:
      'Craft immersive visitor journeys for Kerala&apos;s backwaters and hill stations. Think AI co-guides, low-impact navigation, and inclusive cultural itineraries.',
    tag: 'Tourism',
  },
  {
    title: 'Cultural Tech & Heritage',
    description:
      'Amplify Kerala&apos;s art forms—Kathakali, Mohiniyattam, Theyyam—through AR showcases, archive digitisation, and storytelling platforms.',
    tag: 'Culture',
  },
  {
    title: 'Open Innovation Kalari',
    description:
      'Bring bold ideas that blend AI, health, fintech, and accessibility. Surprise the jury with prototypes rooted in empathy and local insight.',
    tag: 'Wildcard',
  },
]

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
            <h2 className="mt-3 font-heading text-3xl font-black text-charcoal sm:text-4xl">Journey through culture and code</h2>
          </div>
          <p className="max-w-xl text-sm text-charcoal/75">
            Each Kalari track is guided by mentors from Kerala&apos;s arts, sustainability, and tech ecosystems. Choose a lotus petal and
            let your team bloom.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {themes.map((theme) => (
            <div
              key={theme.title}
              className="group relative overflow-hidden rounded-3xl border border-kasavu/25 bg-white/85 p-6 shadow-lg transition hover:-translate-y-1 hover:border-saffron/60"
            >
              <div className="absolute inset-0 -z-10 opacity-0 mix-blend-screen transition duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-kasavu/35 via-saffron/25 to-vermilion/30 blur-3xl" />
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-deepgreen/15 bg-deepgreen/10 px-3 py-1 text-[0.6rem] uppercase tracking-[0.45em] text-deepgreen">
                {theme.tag}
              </span>
              <h3 className="mt-6 text-xl font-semibold text-charcoal">{theme.title}</h3>
              <p className="mt-3 text-sm text-charcoal/75" dangerouslySetInnerHTML={{ __html: theme.description }} />
              <button
                type="button"
                className="mt-6 inline-flex items-center rounded-full border border-kasavu/25 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-deepgreen transition group-hover:border-saffron/60 group-hover:text-saffron"
              >
                View Challenge Brief
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-3xl border border-deepgreen/15 bg-gradient-to-r from-deepgreen/10 via-kasavu/15 to-saffron/15 px-6 py-8 text-charcoal sm:flex-row">
          <p className="text-sm">
            Have a local problem that needs bright minds? Submit your prompt and we&apos;ll add it to the Kalari board.
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