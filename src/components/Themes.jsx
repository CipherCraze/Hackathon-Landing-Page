

const themes = [
  {
    title: 'Education Futures',
    description:
      'Leverage immersive learning and AI copilots to bridge skill gaps. Placeholder to outline problem statement details.',
    tag: 'Education',
  },
  {
    title: 'Adaptive Advertising',
    description:
      'Design inclusive ad-tech experiences that personalise outreach while respecting privacy. Placeholder copy here.',
    tag: 'Advertising',
  },
  {
    title: 'Talent Grid',
    description:
      'Reimagine hiring pipelines with collaborative AI and skill matrices for future teams.',
    tag: 'Hiring',
  },
  {
    title: 'Smart Communities',
    description:
      'Build civic solutions that connect, respond, and empower neighbourhoods across geographies.',
    tag: 'Community',
  },
]

function Themes() {
  return (
    <section id="themes" className="bg-slate-950/90 py-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="flex flex-col gap-6 pb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-300">Themes</span>
            <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">Problem Sectors & Innovation Tracks</h2>
          </div>
          <p className="max-w-xl text-sm text-slate-400">
            A placeholder overview of hackathon themes. Replace with your actual challenge statements and update the call-to-action below.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {themes.map((theme) => (
            <div
              key={theme.title}
              className="group relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-b from-white/10 via-white/5 to-transparent p-6 shadow-lg transition hover:border-amber-400/70"
            >
              <div className="absolute inset-0 -z-10 opacity-0 mix-blend-screen transition duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/40 via-orange-500/20 to-indigo-500/40 blur-3xl" />
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.6rem] uppercase tracking-[0.45em] text-amber-200">
                {theme.tag}
              </span>
              <h3 className="mt-6 text-xl font-semibold text-white">{theme.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{theme.description}</p>
              <button
                type="button"
                className="mt-6 inline-flex items-center rounded-full border border-white/10 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-slate-200 transition group-hover:border-amber-400/70 group-hover:text-amber-300"
              >
                View Problem Statement
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-3xl border border-white/10 bg-gradient-to-r from-amber-400/10 via-orange-500/10 to-indigo-500/10 px-6 py-8 sm:flex-row">
          <p className="text-sm text-slate-200">
            Want to propose a new challenge? Share your industry problem and we will co-create the brief.
          </p>
          <a
            href="#submit-theme"
            className="rounded-full border border-amber-400/40 bg-slate-950/80 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-amber-200 transition hover:border-amber-300 hover:text-amber-100"
          >
            Submit Theme Proposal
          </a>
        </div>
      </div>
    </section>
  )
}

export default Themes