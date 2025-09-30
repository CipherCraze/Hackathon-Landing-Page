const teamMembers = [
  {
    name: 'Aarav Kapoor',
    role: 'Hackathon Director',
    focus: 'Operations & Partnerships',
  },
  {
    name: 'Isha Mehra',
    role: 'Program Curator',
    focus: 'Theme design & mentor ops',
  },
  {
    name: 'Dev Malhotra',
    role: 'Tech Lead',
    focus: 'DevOps, platform & judging stack',
  },
  {
    name: 'Naina Kohli',
    role: 'Community Lead',
    focus: 'Onboarding & engagement',
  },
]

const mentorHighlights = [
  '40+ mentors across AI, fintech, climate, and design.',
  'Office hours every 4 hrs with domain experts.',
  'Investors in residence to review pitch narratives.',
]

function Team() {
  return (
    <section id="team" className="relative overflow-hidden bg-slate-950 py-24">
      <div className="absolute inset-0">
        <div className="absolute left-10 top-10 h-64 w-64 rounded-full bg-gradient-to-br from-amber-400/20 via-orange-500/15 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 translate-y-1/3 rounded-full bg-gradient-to-tl from-indigo-500/30 via-blue-500/20 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6">
        <div className="flex flex-col gap-4 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-300">Team</span>
          <h2 className="text-3xl font-black text-white sm:text-4xl">Your futuristic hackathon crew</h2>
          <p className="mx-auto max-w-3xl text-sm text-slate-400">
            Replace the placeholder names with your organising committee, program designers, and volunteer leads. Highlight how
            participants can connect with them during the hackathon.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 text-left shadow-lg"
            >
              <div className="absolute inset-0 -z-10 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/30 via-orange-500/20 to-indigo-500/30 blur-3xl" />
              </div>
              <p className="text-xs uppercase tracking-[0.35em] text-amber-300">Core Team</p>
              <h3 className="mt-4 text-lg font-semibold text-white">{member.name}</h3>
              <p className="mt-2 text-sm text-slate-300">{member.role}</p>
              <p className="mt-3 text-xs text-slate-400">{member.focus}</p>
              <button
                type="button"
                className="mt-6 inline-flex items-center rounded-full border border-white/10 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-slate-200 transition hover:border-amber-300 hover:text-amber-200"
              >
                Connect
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 rounded-3xl border border-white/10 bg-slate-950/80 p-8 shadow-[0_0_35px_rgba(249,115,22,0.15)] lg:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-amber-300">Mentors & Judges</p>
            <h3 className="mt-3 text-lg font-semibold text-white">Curate your star roster</h3>
            <p className="mt-3 text-sm text-slate-300">
              Placeholder copy: mention key mentors, alumni founders, and industry leaders who will guide participants. Include a
              link to the full roster once finalised.
            </p>
          </div>
          <ul className="space-y-3 text-sm text-slate-200">
            {mentorHighlights.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="inline-flex h-2 w-2 rounded-full bg-gradient-to-r from-amber-400 to-pink-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Team
